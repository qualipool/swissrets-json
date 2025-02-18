import fs from 'fs';
import path from 'path';

import AjvFormats from 'ajv-formats';
import Ajv2020, { KeywordDefinition, Schema } from 'ajv/dist/2020';

import { each } from 'lodash';

import { SwissRetsInventory } from '../model/swissrets-model';
import { allCustomValidators } from '../validator/custom-validation';
import { ErrorDto } from '../validator/validator-types';

export const validateSwissRetsString = (swissretsJson: string): ErrorDto[] => {
  const ajv2020Instance = new Ajv2020({ allErrors: true, verbose: true });
  AjvFormats(ajv2020Instance);

  each(allCustomValidators(), (item: KeywordDefinition) => ajv2020Instance.addKeyword(item));

  ajv2020Instance.validate(provideSchema(), JSON.parse(swissretsJson));

  return (ajv2020Instance.errors as unknown as ErrorDto[]) || [];
};

export const validateSwissRetsObject = (swissretsObject: SwissRetsInventory): ErrorDto[] => {
  const ajv2020Instance = new Ajv2020({ allErrors: true, verbose: true });
  AjvFormats(ajv2020Instance);

  each(allCustomValidators(), (item: KeywordDefinition) => ajv2020Instance.addKeyword(item));

  ajv2020Instance.validate(provideSchema(), swissretsObject);

  return (ajv2020Instance.errors as unknown as ErrorDto[]) || [];
};

const provideSchema = (): Schema => {
  const filePath = path.resolve(__dirname, `../../../schema/schema.json`);
  const schema = fs.readFileSync(filePath).toString();
  return JSON.parse(schema) as Schema;
};
