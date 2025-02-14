import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { performSwissRetsObjectSchemaValidation } from 'src/validator/typescript/validator';

import { SwissRetsInventory } from 'src/model/typescript/swissrets-model';
import { stubSrFullModified } from 'src/tests/typescript/swissrets-stubs';

describe('projects tests', () => {
  it('Invalid - projects has invalid type', () => {
    const invalid = stubSrFullModified('projects', () => {
      return {};
    });
    const output = performSwissRetsObjectSchemaValidation(invalid);

    expect(output[0].message).toBe('must be array');
    expect(output[0].instancePath).toBe('/projects');
  });

  it('Valid - projects can have 0 elements if there are no unit references in properties', () => {
    const valid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.update(valid, 'projects', () => []);
    _.update(valid, 'properties', () => []);
    const output = performSwissRetsObjectSchemaValidation(valid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });
});
