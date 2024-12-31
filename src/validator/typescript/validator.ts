import AjvFormats from 'ajv-formats';
import Ajv2020, { KeywordDefinition } from 'ajv/dist/2020';

import { each } from 'lodash';
import { allCustomValidators } from 'src/validator/typescript/custom-validation';
// eslint-disable-next-line no-restricted-imports
import schema from '../../../schema/schema.json';

export const performSwissRetsSchemaValidation = (swissretsJson: string): ErrorDto[] => {
  const ajv2020Instance = new Ajv2020({ allErrors: true, verbose: true });
  AjvFormats(ajv2020Instance);

  each(allCustomValidators(), (item: KeywordDefinition) => ajv2020Instance.addKeyword(item));

  ajv2020Instance.validate(schema, JSON.parse(swissretsJson));

  return (ajv2020Instance.errors as unknown as ErrorDto[]) || [];
};

export interface ErrorDto<K extends string = string, P = Record<string, unknown>, S = unknown> {
  keyword: K;
  instancePath: string;
  schemaPath: string;
  params: P;
  propertyName?: string;
  message?: string;
  schema?: S;
  parentSchema?: AnySchemaDto;
  data?: unknown;
}

export type AnySchemaDto = SchemaDto | AsyncSchemaDto;

export interface SchemaDto extends _SchemaDto {
  id?: string;
  $id?: string;
  $schema?: string;
  $async?: false;
  [x: string]: unknown;
}

export interface AsyncSchemaDto extends _SchemaDto {
  $async: true;
}

interface _SchemaDto {
  id?: string;
  $id?: string;
  $schema?: string;
  [x: string]: unknown;
}
