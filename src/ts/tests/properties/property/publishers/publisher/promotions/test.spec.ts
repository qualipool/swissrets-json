import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { validateSwissRetsObject } from 'src/ts/validator/validator';

import { SwissRetsInventory } from 'src/ts/model/swissrets-model';
import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';

describe('properties[0].publishers[0].promotions tests', () => {
  it('Invalid - properties[0].publishers[0].promotions must be array', () => {
    const invalid = stubSrFullModified('properties[0].publishers[0].promotions', () => ({}));
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be array');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/promotions');
  });

  it('Valid - properties[0].publishers[0].promotions can be empty array', () => {
    const valid = stubSrFullModified('properties[0].publishers[0].promotions', () => []);
    const output = validateSwissRetsObject(valid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Valid - properties[0].publishers[0].promotions is optional', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'properties[0].publishers[0].promotions');
    const output = validateSwissRetsObject(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });
});
