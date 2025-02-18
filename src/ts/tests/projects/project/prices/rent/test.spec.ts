import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { validateSwissRetsObject } from 'src/ts/validator/validator';

import { SwissRetsInventory } from 'src/ts/model/swissrets-model';
import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';

describe('projects[0].prices.rent tests', () => {
  it('Invalid - projects[0].prices.rent cannot have additional properties', () => {
    const clone = _.cloneDeep(validListing) as SwissRetsInventory;
    _.assign(clone.projects![0].prices!.rent, { additionalProperty: 'additionalProperty' });
    const output = validateSwissRetsObject(clone);

    expect(output[0].message).toBe('must NOT have additional properties');
    expect(output[0].instancePath).toBe('/projects/0/prices/rent');
  });

  it('Invalid - projects[0].prices.rent must be of type object', () => {
    const clone = stubSrFullModified('projects[0].prices.rent', () => 33);
    const output = validateSwissRetsObject(clone);

    expect(output[0].message).toBe('must be object');
    expect(output[0].instancePath).toBe('/projects/0/prices/rent');
  });

  it('Invalid - projects[0].prices.rent.netFrom must be present', () => {
    const clone = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(clone, 'projects[0].prices.rent.netFrom');
    const output = validateSwissRetsObject(clone);

    expect(output[0].message).toBe("must have required property 'netFrom'");
    expect(output[0].instancePath).toBe('/projects/0/prices/rent');
  });

  it('Invalid - projects[0].prices.rent.netFrom must be 0 or higher', () => {
    const clone = stubSrFullModified('projects[0].prices.rent.netFrom', () => -1);
    const output = validateSwissRetsObject(clone);

    expect(output[0].message).toBe('must be >= 0');
    expect(output[0].instancePath).toBe('/projects/0/prices/rent/netFrom');
  });

  it('Invalid - projects[0].prices.rent.netFrom must be of type integer', () => {
    const clone = stubSrFullModified('projects[0].prices.rent.netFrom', () => 'r');
    const output = validateSwissRetsObject(clone);

    expect(output[0].message).toBe('must be integer');
    expect(output[0].instancePath).toBe('/projects/0/prices/rent/netFrom');
  });

  it('Invalid - projects[0].prices.rent.netTo must be present', () => {
    const clone = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(clone, 'projects[0].prices.rent.netTo');
    const output = validateSwissRetsObject(clone);

    expect(output[0].message).toBe("must have required property 'netTo'");
    expect(output[0].instancePath).toBe('/projects/0/prices/rent');
  });

  it('Invalid - projects[0].prices.rent.netTo must be 0 or higher', () => {
    const clone = stubSrFullModified('projects[0].prices.rent.netTo', () => -1);
    const output = validateSwissRetsObject(clone);

    expect(output[0].message).toBe('must be >= 0');
    expect(output[0].instancePath).toBe('/projects/0/prices/rent/netTo');
  });

  it('Invalid - projects[0].prices.rent.netTo must be of type integer', () => {
    const clone = stubSrFullModified('projects[0].prices.rent.netTo', () => 'r');
    const output = validateSwissRetsObject(clone);

    expect(output[0].message).toBe('must be integer');
    expect(output[0].instancePath).toBe('/projects/0/prices/rent/netTo');
  });

  it('Invalid - projects[0].prices.rent.interval must be of type string', () => {
    const clone = stubSrFullModified('projects[0].prices.rent.interval', () => 33);
    const output = validateSwissRetsObject(clone);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/prices/rent/interval');
  });

  it('Invalid - projects[0].prices.rent.interval must be equal to one of the allowed values', () => {
    const invalid = stubSrFullModified('projects[0].prices.rent.interval', () => 'invalid');
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be equal to one of the allowed values');
    expect(output[0].instancePath).toBe('/projects/0/prices/rent/interval');
  });

  it('Invalid - projects[0].prices.rent.referring must be of type string', () => {
    const clone = stubSrFullModified('projects[0].prices.rent.referring', () => 33);
    const output = validateSwissRetsObject(clone);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/prices/rent/referring');
  });

  it('Invalid - projects[0].prices.rent.referring must be equal to one of the allowed values', () => {
    const invalid = stubSrFullModified('projects[0].prices.rent.referring', () => 'invalid');
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be equal to one of the allowed values');
    expect(output[0].instancePath).toBe('/projects/0/prices/rent/referring');
  });
});
