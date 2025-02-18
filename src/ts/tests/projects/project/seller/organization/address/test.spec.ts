import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { validateSwissRetsObject } from 'src/ts/validator/validator';

import { SwissRetsInventory } from 'src/ts/model/swissrets-model';
import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';

describe('projects[0].seller.organization.address tests', () => {
  it('Valid - projects[0].seller.organization.address can be an empty object', () => {
    const invalid = stubSrFullModified('projects[0].seller.organization.address', () => ({}));
    const output = validateSwissRetsObject(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Invalid - projects[0].seller.organization.address cannot have additional properties', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.assign(invalid.projects![0].seller!.organization!.address, {
      additionalProperty: 'additionalProperty'
    });
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must NOT have additional properties');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/address');
  });

  it('Invalid - projects[0].seller.organization.address must be of type object', () => {
    const invalid = stubSrFullModified('projects[0].seller.organization.address', () => 33);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be object');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/address');
  });

  it('Invalid - projects[0].seller.organization.address.countryCode must be of type string', () => {
    const invalid = stubSrFullModified(
      'projects[0].seller.organization.address.countryCode',
      () => 33
    );
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/address/countryCode');
  });

  it('Invalid - projects[0].seller.organization.address.countryCode must be of certain pattern', () => {
    const invalid = stubSrFullModified(
      'projects[0].seller.organization.address.countryCode',
      () => 'fff.fff'
    );
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must match pattern "[A-Z]{2}"');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/address/countryCode');
  });

  it('Invalid - projects[0].seller.organization.address.locality must be of type string', () => {
    const invalid = stubSrFullModified(
      'projects[0].seller.organization.address.locality',
      () => 33
    );
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/address/locality');
  });

  it('Invalid - projects[0].seller.organization.address.region must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].seller.organization.address.region', () => 33);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/address/region');
  });

  it('Invalid - projects[0].seller.organization.address.postalCode must be of type string', () => {
    const invalid = stubSrFullModified(
      'projects[0].seller.organization.address.postalCode',
      () => 33
    );
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/address/postalCode');
  });

  it('Invalid - projects[0].seller.organization.address.postOfficeBoxNumber must be of type string', () => {
    const invalid = stubSrFullModified(
      'projects[0].seller.organization.address.postOfficeBoxNumber',
      () => 33
    );
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe(
      '/projects/0/seller/organization/address/postOfficeBoxNumber'
    );
  });

  it('Invalid - projects[0].seller.organization.address.street must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].seller.organization.address.street', () => 33);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/address/street');
  });

  it('Invalid - projects[0].seller.organization.address.streetNumber must be of type string', () => {
    const invalid = stubSrFullModified(
      'projects[0].seller.organization.address.streetNumber',
      () => 33
    );
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/address/streetNumber');
  });

  it('Invalid - projects[0].seller.organization.address.streetAddition must be of type string', () => {
    const invalid = stubSrFullModified(
      'projects[0].seller.organization.address.streetAddition',
      () => 33
    );
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/address/streetAddition');
  });

  it('Invalid - projects[0].seller.organization.address.subunit must be of type integer', () => {
    const invalid = stubSrFullModified(
      'projects[0].seller.organization.address.subunit',
      () => 'a'
    );
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be integer');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/address/subunit');
  });
});
