import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { performSwissRetsObjectSchemaValidation } from 'src/validator/typescript/validator';

import { SwissRetsInventory } from 'src/model/typescript/swissrets-model';
import { stubSrFullModified } from 'src/tests/typescript/swissrets-stubs';

describe('properties[0].publishers[0] tests', () => {
  it('Invalid - properties[0].publishers[0] must be object', () => {
    const invalid = stubSrFullModified('properties[0].publishers[0]', () => []);
    const output = performSwissRetsObjectSchemaValidation(invalid);

    expect(output[0].message).toBe('must be object');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0');
  });

  it('Invalid - properties[0].publishers[0] must not have additional properties', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.assign(invalid.properties![0].publishers![0], { additionalProperty: 'dummy' });
    const output = performSwissRetsObjectSchemaValidation(invalid);

    expect(output[0].message).toBe('must NOT have additional properties');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0');
  });
});
