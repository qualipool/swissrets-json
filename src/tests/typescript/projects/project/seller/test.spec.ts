import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { performSwissRetsObjectSchemaValidation } from 'src/validator/typescript/validator';

import { SwissRetsInventory } from 'src/model/typescript/swissrets-model';
import { stubSrFullModified } from 'src/tests/typescript/swissrets-stubs';

describe('projects[0].seller tests', () => {
  it('Valid - projects[0].seller can be omitted', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'projects[0].seller');
    const output = performSwissRetsObjectSchemaValidation(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Valid - projects[0].seller can be empty object', () => {
    const invalid = stubSrFullModified('projects[0].seller', () => ({}));
    const output = performSwissRetsObjectSchemaValidation(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Invalid - projects[0].seller cannot have additional properties', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.assign(invalid.projects![0].seller, { additionalProperty: 'additionalProperty' });
    const output = performSwissRetsObjectSchemaValidation(invalid);

    expect(output[0].message).toBe('must NOT have additional properties');
    expect(output[0].instancePath).toBe('/projects/0/seller');
  });

  it('Invalid - projects[0].seller must be of type object', () => {
    const invalid = stubSrFullModified('projects[0].seller', () => 33);
    const output = performSwissRetsObjectSchemaValidation(invalid);

    expect(output[0].message).toBe('must be object');
    expect(output[0].instancePath).toBe('/projects/0/seller');
  });
});
