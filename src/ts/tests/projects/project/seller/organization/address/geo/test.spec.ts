import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { validateSwissRets } from 'src/ts/validator/validator';

import { SwissRetsInventory } from 'src/ts/model/swissrets-model';
import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';

describe('projects[0].seller.organization.address.geo tests', () => {
  it('Invalid - projects[0].seller.organization.address.geo cannot have additional properties', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.assign(invalid.projects![0].seller!.organization!.address!.geo, {
      additionalProperty: 'additionalProperty'
    });
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must NOT have additional properties');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/address/geo');
  });

  it('Invalid - projects[0].seller.organization.address.geo must be of type object', () => {
    const invalid = stubSrFullModified('projects[0].seller.organization.address.geo', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be object');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/address/geo');
  });

  it('Valid - projects[0].seller.organization.address.geo.elevation can be omitted', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'projects[0].seller.organization.address.geo.elevation');
    const output = validateSwissRets(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Invalid - projects[0].seller.organization.address.geo.elevation must be of type number', () => {
    const invalid = stubSrFullModified(
      'projects[0].seller.organization.address.geo.elevation',
      () => 'invalid'
    );
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be number');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/address/geo/elevation');
  });

  it('Invalid - projects[0].seller.organization.address.geo.latitude must be present', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'projects[0].seller.organization.address.geo.latitude');
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe("must have required property 'latitude'");
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/address/geo');
  });

  it('Invalid - projects[0].seller.organization.address.geo.latitude must be of type number', () => {
    const invalid = stubSrFullModified(
      'projects[0].seller.organization.address.geo.latitude',
      () => 'invalid'
    );
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be number');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/address/geo/latitude');
  });

  it('Invalid - projects[0].seller.organization.address.geo.longitude must be present', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'projects[0].seller.organization.address.geo.longitude');
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe("must have required property 'longitude'");
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/address/geo');
  });

  it('Invalid - projects[0].seller.organization.address.geo.longitude must be of type number', () => {
    const invalid = stubSrFullModified(
      'projects[0].seller.organization.address.geo.longitude',
      () => 'invalid'
    );
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be number');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/address/geo/longitude');
  });
});
