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
