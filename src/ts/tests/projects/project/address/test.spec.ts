import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { validateSwissRets } from 'src/ts/validator/validator';

import { SwissRetsInventory } from 'src/ts/model/swissrets-model';
import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';

describe('projects[0].address tests', () => {
  it('Valid - projects[0].address can be an empty object', () => {
    const invalid = stubSrFullModified('projects[0].address', () => ({}));
    const output = validateSwissRets(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Invalid - projects[0].address cannot have additional properties', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.assign(invalid.projects![0].address, { additionalProperty: 'additionalProperty' });
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must NOT have additional properties');
    expect(output[0].instancePath).toBe('/projects/0/address');
  });

  it('Invalid - projects[0].address must be of type object', () => {
    const invalid = stubSrFullModified('projects[0].address', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be object');
    expect(output[0].instancePath).toBe('/projects/0/address');
  });

  it('Invalid - projects[0].address.countryCode must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].address.countryCode', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/address/countryCode');
  });

  it('Invalid - projects[0].address.countryCode must be of certain pattern', () => {
    const invalid = stubSrFullModified('projects[0].address.countryCode', () => 'fff.fff');
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must match pattern "[A-Z]{2}"');
    expect(output[0].instancePath).toBe('/projects/0/address/countryCode');
  });

  it('Invalid - projects[0].address.locality must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].address.locality', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/address/locality');
  });

  it('Invalid - projects[0].address.region must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].address.region', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/address/region');
  });

  it('Invalid - projects[0].address.postalCode must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].address.postalCode', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/address/postalCode');
  });

  it('Invalid - projects[0].address.postOfficeBoxNumber must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].address.postOfficeBoxNumber', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/address/postOfficeBoxNumber');
  });

  it('Invalid - projects[0].address.street must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].address.street', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/address/street');
  });

  it('Invalid - projects[0].address.streetNumber must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].address.streetNumber', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/address/streetNumber');
  });

  it('Invalid - projects[0].address.streetAddition must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].address.streetAddition', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/address/streetAddition');
  });

  it('Invalid - projects[0].address.subunit must be of type integer', () => {
    const invalid = stubSrFullModified('projects[0].address.subunit', () => 'a');
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be integer');
    expect(output[0].instancePath).toBe('/projects/0/address/subunit');
  });
});
