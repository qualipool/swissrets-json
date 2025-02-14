import _ from 'lodash';
import { performSwissRetsObjectSchemaValidation } from 'src/validator/typescript/validator';

import { stubSrFullModified } from 'src/tests/typescript/swissrets-stubs';

describe('projects[0].localizations tests', () => {
  it('Invalid - projects[0].localizations must be of type array', () => {
    const clone = stubSrFullModified('projects[0].localizations', () => 33);
    const output = performSwissRetsObjectSchemaValidation(clone);

    expect(output[0].message).toBe('must be array');
    expect(output[0].instancePath).toBe('/projects/0/localizations');
  });

  it('Invalid - projects[0].localizations can be an empty array', () => {
    const clone = stubSrFullModified('projects[0].localizations', () => []);
    const output = performSwissRetsObjectSchemaValidation(clone);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });
});
