import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { validateSwissRetsObject } from 'src/ts/validator/validator';

import { SwissRetsInventory } from 'src/ts/model/swissrets-model';
import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';

describe('projects tests', () => {
  it('Invalid - projects has invalid type', () => {
    const invalid = stubSrFullModified('projects', () => {
      return {};
    });
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be array');
    expect(output[0].instancePath).toBe('/projects');
  });

  it('Valid - projects can have 0 elements if there are no unit references in properties', () => {
    const valid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.update(valid, 'projects', () => []);
    _.update(valid, 'properties', () => []);
    const output = validateSwissRetsObject(valid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });
});
