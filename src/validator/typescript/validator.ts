import AjvFormats from 'ajv-formats';
import Ajv2020, { KeywordDefinition } from 'ajv/dist/2020';

import { each } from 'lodash';
import { allCustomValidators } from 'src/validator/typescript/custom-validation';

import schema from 'schema/schema.json';
import { SwissRetsInventory } from 'src/model/typescript/swissrets-model';
import { ErrorDto } from 'src/validator/typescript/validator-types';

export const performSwissStringRetsSchemaValidation = (swissretsJson: string): ErrorDto[] => {
  const ajv2020Instance = new Ajv2020({ allErrors: true, verbose: true });
  AjvFormats(ajv2020Instance);

  each(allCustomValidators(), (item: KeywordDefinition) => ajv2020Instance.addKeyword(item));

  ajv2020Instance.validate(schema, JSON.parse(swissretsJson));

  return (ajv2020Instance.errors as unknown as ErrorDto[]) || [];
};

export const performSwissRetsObjectSchemaValidation = (
  swissretsObject: SwissRetsInventory
): ErrorDto[] => {
  const ajv2020Instance = new Ajv2020({ allErrors: true, verbose: true });
  AjvFormats(ajv2020Instance);

  each(allCustomValidators(), (item: KeywordDefinition) => ajv2020Instance.addKeyword(item));

  ajv2020Instance.validate(schema, swissretsObject);

  return (ajv2020Instance.errors as unknown as ErrorDto[]) || [];
};
