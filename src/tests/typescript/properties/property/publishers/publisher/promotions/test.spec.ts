import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { performSwissRetsObjectSchemaValidation } from 'src/validator/typescript/validator';

import { SwissRetsInventory } from 'src/model/typescript/swissrets-model';
import { stubSrFullModified } from 'src/tests/typescript/swissrets-stubs';

describe('properties[0].publishers[0].promotions tests', () => {
  it('Invalid - properties[0].publishers[0].promotions must be array', () => {
    const invalid = stubSrFullModified('properties[0].publishers[0].promotions', () => ({}));
    const output = performSwissRetsObjectSchemaValidation(invalid);

    expect(output[0].message).toBe('must be array');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/promotions');
  });

  it('Valid - properties[0].publishers[0].promotions can be empty array', () => {
    const valid = stubSrFullModified('properties[0].publishers[0].promotions', () => []);
    const output = performSwissRetsObjectSchemaValidation(valid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Valid - properties[0].publishers[0].promotions is optional', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'properties[0].publishers[0].promotions');
    const output = performSwissRetsObjectSchemaValidation(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });
});
