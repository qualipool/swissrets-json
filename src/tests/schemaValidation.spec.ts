import { performSwissRetsSchemaValidation } from "../validator/typescript/validator";

it('should ', () => {
  const result = performSwissRetsSchemaValidation('{"foo": "bar"}');
  expect(result.length).toEqual(2);
  expect(result[0].keyword).toEqual('required');
  expect(result[0].message).toEqual("must have required property 'generator'");
  expect(result[1].keyword).toEqual('additionalProperties');
  expect(result[1].message).toEqual("must NOT have additional properties");
});