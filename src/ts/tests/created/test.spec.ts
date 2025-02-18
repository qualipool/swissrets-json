import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { SwissRetsInventory } from 'src/ts/model/swissrets-model';
import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';
import { validateSwissRetsObject } from 'src/ts/validator/validator';

describe('created tests', () => {
  it('Invalid - must be string', () => {
    const invalid = stubSrFullModified('created', () => 33);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/created');
  });

  it('Invalid - not valid string', () => {
    const invalid = stubSrFullModified('created', () => '');
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must NOT have fewer than 1 characters');
    expect(output[0].instancePath).toBe('/created');
    expect(output[1].message).toBe('must match format "date-time"');
    expect(output[1].instancePath).toBe('/created');
  });

  it('Valid - created is optional', () => {
    const valid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(valid, 'created');
    const output = validateSwissRetsObject(valid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });
});
