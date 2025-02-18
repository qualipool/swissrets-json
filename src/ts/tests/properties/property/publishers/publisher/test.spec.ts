import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { validateSwissRetsObject } from 'src/ts/validator/validator';

import { SwissRetsInventory } from 'src/ts/model/swissrets-model';
import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';

describe('properties[0].publishers[0] tests', () => {
  it('Invalid - properties[0].publishers[0] must be object', () => {
    const invalid = stubSrFullModified('properties[0].publishers[0]', () => []);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be object');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0');
  });

  it('Invalid - properties[0].publishers[0] must not have additional properties', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.assign(invalid.properties![0].publishers![0], { additionalProperty: 'dummy' });
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must NOT have additional properties');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0');
  });

  it('Invalid - properties[0].publishers[0].id must be present', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'properties[0].publishers[0].id');
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe("must have required property 'id'");
    expect(output[0].instancePath).toBe('/properties/0/publishers/0');
  });

  it('Invalid - properties[0].publishers[0].id must be string', () => {
    const invalid = stubSrFullModified('properties[0].publishers[0].id', () => 33);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/id');
  });
});
