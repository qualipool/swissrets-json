import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { validateSwissRetsObject } from 'src/ts/validator/validator';

import { SwissRetsInventory } from 'src/ts/model/swissrets-model';
import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';

describe('projects[0].seller.organization tests', () => {
  it('Valid - projects[0].seller.organization can be omitted', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'projects[0].seller.organization');
    const output = validateSwissRetsObject(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Valid - projects[0].seller.organization can be empty object', () => {
    const invalid = stubSrFullModified('projects[0].seller.organization', () => ({}));
    const output = validateSwissRetsObject(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Invalid - projects[0].seller.organization cannot have additional properties', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.assign(invalid.projects![0].seller!.organization, {
      additionalProperty: 'additionalProperty'
    });
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must NOT have additional properties');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization');
  });

  it('Invalid - projects[0].seller.organization must be of type object', () => {
    const invalid = stubSrFullModified('projects[0].seller.organization', () => 33);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be object');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization');
  });

  it('Invalid - projects[0].seller.organization.legalName must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].seller.organization.legalName', () => 33);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/legalName');
  });

  it('Invalid - projects[0].seller.organization.brand must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].seller.organization.brand', () => 33);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/brand');
  });

  it('Invalid - projects[0].seller.organization.email must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].seller.organization.email', () => 33);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/email');
  });

  it('Invalid - projects[0].seller.organization.email must be of certain pattern', () => {
    const invalid = stubSrFullModified('projects[0].seller.organization.email', () => 'fff.fff');
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must match pattern "[^@]+@[^\\.]+\\..+"');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/email');
  });

  it('Invalid - projects[0].seller.organization.emailRem must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].seller.organization.emailRem', () => 33);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/emailRem');
  });

  it('Invalid - projects[0].seller.organization.emailRem must be of certain pattern', () => {
    const invalid = stubSrFullModified('projects[0].seller.organization.emailRem', () => 'fff.fff');
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must match pattern "[^@]+@[^\\.]+\\..+"');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/emailRem');
  });

  it('Invalid - projects[0].seller.organization.phone must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].seller.organization.phone', () => 33);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/phone');
  });

  it('Invalid - projects[0].seller.organization.phone must be of certain pattern', () => {
    const invalid = stubSrFullModified('projects[0].seller.organization.phone', () => '44');
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must match pattern "^[+]?([0-9] )*[0-9]{3,}$"');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/phone');
  });

  it('Invalid - projects[0].seller.organization.mobile must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].seller.organization.mobile', () => 33);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/mobile');
  });

  it('Invalid - projects[0].seller.organization.mobile must be of certain pattern', () => {
    const invalid = stubSrFullModified('projects[0].seller.organization.mobile', () => '44');
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must match pattern "^[+]?([0-9] )*[0-9]{3,}$"');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/mobile');
  });

  it('Invalid - projects[0].seller.organization.id must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].seller.organization.id', () => 33);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/id');
  });
});
