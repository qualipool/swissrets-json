import fs from 'fs';
import path from 'path';
import { SwissRetsInventory } from 'src/ts/model/swissrets-model';
import { validateSwissRetsObject } from 'src/ts/validator/validator';

describe('Unit Test: Validate Samples', () => {
  it('Valid - Should not return error', () => {
    const output = validateSwissRetsObject(provideTestData('sr-valid'));
    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Invalid - missing referenceId', () => {
    // when
    const testData = provideTestData('sr-valid');
    // @ts-expect-error - we know this is valid
    delete testData.properties[0].referenceId;

    const output = validateSwissRetsObject(testData);

    // then
    expect(output).toHaveLength(1);
    expect(output[0].message).toBe("must have required property 'referenceId'");
    expect(output[0].keyword).toBe('required');
    expect(output[0].instancePath).toBe('/properties/0');
  });

  it('Invalid - additional property', () => {
    // when
    const testData = provideTestData('sr-valid');
    // @ts-expect-error - we know this is valid
    testData.properties[0].foo = 'bar';

    const output = validateSwissRetsObject(testData);

    // then
    expect(output).toHaveLength(1);
    expect(output[0].message).toBe('must NOT have additional properties');
    expect(output[0].keyword).toBe('additionalProperties');
    expect(output[0].instancePath).toBe('/properties/0');
  });

  it('Invalid - project.unit has same refenereceId', () => {
    const output = validateSwissRetsObject(provideTestData('sr-invalid-uniqId'));

    expect(output).toHaveLength(1);
    expect(output[0].message).toBe('must pass "uniqueId" keyword validation');
    expect(output[0].keyword).toBe('uniqueId');
    expect(output[0].instancePath).toBe('/projects/0/units');
  });

  it('Invalid - properties.unitReferenceId is not same as project.unit.refenereceId', () => {
    const output = validateSwissRetsObject(provideTestData('sr-invalid-sameAs'));

    expect(output).toHaveLength(1);
    expect(output[0].message).toBe('must pass "sameAs" keyword validation');
    expect(output[0].keyword).toBe('sameAs');
    expect(output[0].instancePath).toBe('/properties/0/unitReferenceId');
    expect(output[0].data).toBe('unitRefId222');
  });
});

const provideTestData = (file: string): SwissRetsInventory => {
  const filePath =
    file == 'sr-valid'
      ? path.resolve(__dirname, `../../../../examples/swissrets-full.json`)
      : path.resolve(__dirname, `../resources/${file}.json`);
  const sample = fs.readFileSync(filePath).toString();
  return JSON.parse(sample) as SwissRetsInventory;
};
