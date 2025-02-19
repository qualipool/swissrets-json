import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { validateSwissRets } from 'src/ts/validator/validator';

import { SwissRetsInventory } from 'src/ts/model/swissrets-model';
import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';

describe('properties[0].publishers[0] tests', () => {
  it('Invalid - properties[0].publishers[0] must be object', () => {
    const invalid = stubSrFullModified('properties[0].publishers[0]', () => []);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be object');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0');
  });

  it('Invalid - properties[0].publishers[0] must not have additional properties', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.assign(invalid.properties![0].publishers![0], { additionalProperty: 'dummy' });
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must NOT have additional properties');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0');
  });
});
