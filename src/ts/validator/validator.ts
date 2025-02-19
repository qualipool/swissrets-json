import fs from 'fs';
import path from 'path';

import AjvFormats from 'ajv-formats';
import Ajv2020, { KeywordDefinition, Schema } from 'ajv/dist/2020';

import { each } from 'lodash';

import { SwissRetsInventory } from '../model/swissrets-model';
import { allCustomValidators } from '../validator/custom-validation';
import { ErrorDto } from '../validator/validator-types';

export type SwissRetsString = string;

export interface validatorConfig {
  /**
   * If true, additional properties will be removed from the object before validation.
   * If false, additional properties will cause validation to fail.
   */
  removeAdditional: boolean;
}

/**
 * Validates the given SwissRETS JSON string or object against the schema.
 * @param swissretsJson The SwissRETS JSON string or object to validate.
 * @returns An array of errors. If the array is empty, the JSON is valid.
 */
export const validateSwissRets = (
  swissretsJson: SwissRetsString | SwissRetsInventory,
  config: validatorConfig = { removeAdditional: false }
): ErrorDto[] => {
  const ajv2020Instance = new Ajv2020({ allErrors: true, verbose: true, ...config });
  AjvFormats(ajv2020Instance);

  each(allCustomValidators(), (item: KeywordDefinition) => ajv2020Instance.addKeyword(item));

  const jsonObject: SwissRetsInventory =
    swissretsJson instanceof Object ? swissretsJson : JSON.parse(swissretsJson);

  ajv2020Instance.validate(provideSchema(), jsonObject);

  return (ajv2020Instance.errors as unknown as ErrorDto[]) || [];
};

const provideSchema = (): Schema => {
  const filePath = path.resolve(__dirname, `../../../schema/schema.json`);
  const schema = fs.readFileSync(filePath).toString();
  return JSON.parse(schema) as Schema;
};
