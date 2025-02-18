import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { SwissRetsInventory } from 'src/ts/model/swissrets-model';
import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';
import { validateSwissRetsObject } from 'src/ts/validator/validator';

describe('generator tests', () => {
  it('Invalid - generator has invalid type', () => {
    const invalid = stubSrFullModified('generator', () => []);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be object');
    expect(output[0].instancePath).toBe('/generator');
  });

  it('Invalid - generator has additional property', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.assign(invalid.generator, { additionalProp: 33 });
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must NOT have additional properties');
    expect(output[0].instancePath).toBe('/generator');
  });

  it('Invalid - generator.name has invalid type', () => {
    const invalid = stubSrFullModified('generator.name', () => 44);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/generator/name');
  });

  it('Invalid - generator.name must NOT have fewer than 1 characters', () => {
    const invalid = stubSrFullModified('generator.name', () => '');
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must NOT have fewer than 1 characters');
    expect(output[0].instancePath).toBe('/generator/name');
  });

  it('Invalid - generator.version must be string', () => {
    const invalid = stubSrFullModified('generator.version', () => 88);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/generator/version');
  });

  it('Invalid - generator.version must NOT have fewer than 1 characters', () => {
    const invalid = stubSrFullModified('generator.version', () => '');
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must NOT have fewer than 1 characters');
    expect(output[0].instancePath).toBe('/generator/version');
  });

  it("Invalid - generator.version must have required property 'version'", () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'generator.version');
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe("must have required property 'version'");
    expect(output[0].instancePath).toBe('/generator');
  });
});
