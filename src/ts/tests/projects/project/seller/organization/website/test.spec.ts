import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { validateSwissRetsObject } from 'src/ts/validator/validator';

import { SwissRetsInventory } from 'src/ts/model/swissrets-model';
import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';

describe('projects[0].seller.organization.website tests', () => {
  it('Invalid - projects[0].seller.organization.website.url must be present', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'projects[0].seller.organization.website.url');
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe("must have required property 'url'");
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/website');
  });

  it('Valid - projects[0].seller.organization.website.title can be omitted', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'projects[0].seller.organization.website.title');
    const output = validateSwissRetsObject(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Invalid - projects[0].seller.organization.website cannot have additional properties', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.assign(invalid.projects![0].seller!.organization!.website, {
      additionalProperty: 'additionalProperty'
    });
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must NOT have additional properties');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/website');
  });

  it('Invalid - projects[0].seller.organization.website must be of type object', () => {
    const invalid = stubSrFullModified('projects[0].seller.organization.website', () => 33);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be object');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/website');
  });

  it('Invalid - projects[0].seller.organization.website.title must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].seller.organization.website.title', () => 33);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/website/title');
  });

  it('Invalid - projects[0].seller.organization.website.url must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].seller.organization.website.url', () => 33);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/organization/website/url');
  });
});
