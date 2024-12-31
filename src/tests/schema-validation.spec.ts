import fs from 'fs';
import path from 'path';
import { ErrorDto, performSwissRetsSchemaValidation } from 'src/validator/typescript/validator';

const shouldFailPath = path.join(__dirname, 'should-fail');
const shouldPassPath = path.join(__dirname, '..', '..', 'examples');

describe('Passing', () => {
  it('should succeed for swissrets-full', () => {
    const result = validatePassingFile('swissrets-full');
    expect(result.length).toEqual(0);
  });

  it('should succeed for swissrets-min', () => {
    const result = validatePassingFile('swissrets-min');
    expect(result.length).toEqual(0);
  });
});

describe('Failing', () => {
  it('should fail for fully invalid', () => {
    const result = performSwissRetsSchemaValidation('{"foo": "bar"}');
    expect(result.length).toEqual(2);
    expect(result[0].keyword).toEqual('required');
    expect(result[0].message).toEqual("must have required property 'generator'");
    expect(result[1].keyword).toEqual('additionalProperties');
    expect(result[1].message).toEqual('must NOT have additional properties');
  });

  it('should fail for availability-missing ', () => {
    const result = validateFailingFile('availability-missing');
    expect(result.length).toEqual(1);
    expect(result[0].keyword).toEqual('required');
    expect(result[0].message).toEqual("must have required property 'availability'");
  });

  it('should fail for localization-lang-missing', () => {
    const result = validateFailingFile('localization-lang-missing');
    expect(result.length).toEqual(1);
    expect(result[0].keyword).toEqual('required');
    expect(result[0].message).toEqual("must have required property 'languageCode'");
  });

  it('should fail for localization-title-missing', () => {
    const result = validateFailingFile('localization-title-missing');
    expect(result.length).toEqual(1);
    expect(result[0].keyword).toEqual('required');
    expect(result[0].message).toEqual("must have required property 'title'");
  });

  it.skip('should fail for localization-empty', () => {
    const result = validateFailingFile('localization-empty');
    expect(result.length).toEqual(1);
    expect(result[0].keyword).toEqual('TBD');
    expect(result[0].message).toEqual('TBD');
  });

  it('should fail for localization-missing', () => {
    const result = validateFailingFile('localization-missing');
    expect(result.length).toEqual(1);
    expect(result[0].keyword).toEqual('required');
    expect(result[0].message).toEqual("must have required property 'localizations'");
  });

  it('should fail for property-id-missing', () => {
    const result = validateFailingFile('property-id-missing');
    expect(result.length).toEqual(1);
    expect(result[0].keyword).toEqual('required');
    expect(result[0].message).toEqual("must have required property 'id'");
  });

  it('should fail for property-reference-id-missing', () => {
    const result = validateFailingFile('property-reference-id-missing');
    expect(result.length).toEqual(1);
    expect(result[0].keyword).toEqual('required');
    expect(result[0].message).toEqual("must have required property 'referenceId'");
  });
});

const validatePassingFile = (fileName: string): ErrorDto[] => {
  const file = path.join(shouldPassPath, `${fileName}.json`);
  const json = fs.readFileSync(file, { encoding: 'utf8' });
  const result = performSwissRetsSchemaValidation(json);
  return result;
};

const validateFailingFile = (fileName: string): ErrorDto[] => {
  const file = path.join(shouldFailPath, `${fileName}.json`);
  const json = fs.readFileSync(file, { encoding: 'utf8' });
  const result = performSwissRetsSchemaValidation(json);
  return result;
};
