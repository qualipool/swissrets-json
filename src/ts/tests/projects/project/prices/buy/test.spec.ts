import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { validateSwissRets } from 'src/ts/validator/validator';

import { SwissRetsInventory } from 'src/ts/model/swissrets-model';
import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';

describe('projects[0].prices.buy tests', () => {
  it('Invalid - projects[0].prices.buy cannot have additional properties', () => {
    const clone = _.cloneDeep(validListing) as SwissRetsInventory;
    _.assign(clone.projects![0].prices!.buy, { additionalProperty: 'additionalProperty' });
    const output = validateSwissRets(clone);

    expect(output[0].message).toBe('must NOT have additional properties');
    expect(output[0].instancePath).toBe('/projects/0/prices/buy');
  });

  it('Invalid - projects[0].prices.buy must be of type object', () => {
    const clone = stubSrFullModified('projects[0].prices.buy', () => 33);
    const output = validateSwissRets(clone);

    expect(output[0].message).toBe('must be object');
    expect(output[0].instancePath).toBe('/projects/0/prices/buy');
  });

  it('Invalid - projects[0].prices.buy.priceFrom must be present', () => {
    const clone = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(clone, 'projects[0].prices.buy.priceFrom');
    const output = validateSwissRets(clone);

    expect(output[0].message).toBe("must have required property 'priceFrom'");
    expect(output[0].instancePath).toBe('/projects/0/prices/buy');
  });

  it('Invalid - projects[0].prices.buy.priceFrom must be 0 or higher', () => {
    const clone = stubSrFullModified('projects[0].prices.buy.priceFrom', () => -1);
    const output = validateSwissRets(clone);

    expect(output[0].message).toBe('must be >= 0');
    expect(output[0].instancePath).toBe('/projects/0/prices/buy/priceFrom');
  });

  it('Invalid - projects[0].prices.buy.priceTo must be present', () => {
    const clone = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(clone, 'projects[0].prices.buy.priceTo');
    const output = validateSwissRets(clone);

    expect(output[0].message).toBe("must have required property 'priceTo'");
    expect(output[0].instancePath).toBe('/projects/0/prices/buy');
  });

  it('Invalid - projects[0].prices.buy.priceTo must be 0 or higher', () => {
    const clone = stubSrFullModified('projects[0].prices.buy.priceTo', () => -1);
    const output = validateSwissRets(clone);

    expect(output[0].message).toBe('must be >= 0');
    expect(output[0].instancePath).toBe('/projects/0/prices/buy/priceTo');
  });

  it('Invalid - projects[0].prices.buy.referring must be of type string', () => {
    const clone = stubSrFullModified('projects[0].prices.buy.referring', () => 33);
    const output = validateSwissRets(clone);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/prices/buy/referring');
  });

  it('Invalid - projects[0].prices.buy.referring must be present', () => {
    const clone = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(clone, 'projects[0].prices.buy.referring');
    const output = validateSwissRets(clone);

    expect(output[0].message).toBe("must have required property 'referring'");
    expect(output[0].instancePath).toBe('/projects/0/prices/buy');
  });

  it('Invalid - projects[0].prices.buy.referring must be equal to one of the allowed values', () => {
    const invalid = stubSrFullModified('projects[0].prices.buy.referring', () => 'invalid');
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be equal to one of the allowed values');
    expect(output[0].instancePath).toBe('/projects/0/prices/buy/referring');
  });
});
