import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { SwissRetsInventory } from 'src/model/typescript/swissrets-model';
import { stubSrFullModified } from 'src/tests/typescript/swissrets-stubs';
import { performSwissRetsObjectSchemaValidation } from 'src/validator/typescript/validator';

describe('created tests', () => {
  it('Invalid - must be string', () => {
    const invalid = stubSrFullModified('created', () => 33);
    const output = performSwissRetsObjectSchemaValidation(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/created');
  });

  it('Invalid - not valid string', () => {
    const invalid = stubSrFullModified('created', () => '');
    const output = performSwissRetsObjectSchemaValidation(invalid);

    expect(output[0].message).toBe('must NOT have fewer than 1 characters');
    expect(output[0].instancePath).toBe('/created');
    expect(output[1].message).toBe('must match format "date-time"');
    expect(output[1].instancePath).toBe('/created');
  });

  it('Valid - created is optional', () => {
    const valid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(valid, 'created');
    const output = performSwissRetsObjectSchemaValidation(valid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });
});
