import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { validateSwissRets } from 'src/ts/validator/validator';

import { SwissRetsInventory } from 'src/ts/model/swissrets-model';
import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';

describe('projects[0] tests', () => {
  it('Invalid - projects[0] must be object', () => {
    const invalid = stubSrFullModified('properties', () => []);
    _.update(invalid, 'projects[0]', () => []);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be object');
    expect(output[0].instancePath).toBe('/projects/0');
  });

  it('Invalid - projects[0] has additional properties', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.assign(invalid.projects![0], { additionalProperty: 'dummy' });
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must NOT have additional properties');
    expect(output[0].instancePath).toBe('/projects/0');
  });

  it('Invalid - projects[0].id has invalid type', () => {
    const invalid = stubSrFullModified('projects[0].id', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/id');
  });

  it('Invalid - projects[0].referenceId has invalid type', () => {
    const invalid = stubSrFullModified('projects[0].referenceId', () => 22);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/referenceId');
  });

  it('Invalid - projects[0].constructionStatus has invalid value', () => {
    const invalid = stubSrFullModified('projects[0].constructionStatus', () => 'invalid');
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be equal to one of the allowed values');
    expect(output[0].instancePath).toBe('/projects/0/constructionStatus');
  });
});
