import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { performSwissRetsObjectSchemaValidation } from 'src/validator/typescript/validator';

import { SwissRetsInventory } from 'src/model/typescript/swissrets-model';
import { stubSrFullModified } from 'src/tests/typescript/swissrets-stubs';

describe('projects[0].availability tests', () => {
  it('Invalid - projects[0].availability has invalid type', () => {
    const invalid = stubSrFullModified('projects[0].availability', () => 'invalid');
    const output = performSwissRetsObjectSchemaValidation(invalid);

    expect(output[0].message).toBe('must be object');
    expect(output[0].instancePath).toBe('/projects/0/availability');
  });

  it('Invalid - projects[0].availability has additional properties', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.assign(invalid.projects![0].availability, { additionalProperty: 'dummy' });
    const output = performSwissRetsObjectSchemaValidation(invalid);

    expect(output[0].message).toBe('must NOT have additional properties');
    expect(output[0].instancePath).toBe('/projects/0/availability');
  });

  it('Invalid - projects[0].availability.state has invalid type', () => {
    const invalid = stubSrFullModified('projects[0].availability.state', () => 55);
    const output = performSwissRetsObjectSchemaValidation(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/availability/state');

    expect(output[1].message).toBe('must be string');
    expect(output[1].instancePath).toBe('/projects/0/availability/state');

    expect(output[2].message).toBe('must be equal to one of the allowed values');
    expect(output[2].instancePath).toBe('/projects/0/availability/state');
  });

  it('Invalid - projects[0].availability.state has invalid value', () => {
    const invalid = stubSrFullModified('projects[0].availability.state', () => 'invalid');
    const output = performSwissRetsObjectSchemaValidation(invalid);

    expect(output[0].message).toBe('must be equal to one of the allowed values');
    expect(output[0].instancePath).toBe('/projects/0/availability/state');
  });
});
