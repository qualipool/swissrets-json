import _ from 'lodash';
import { stubSrFullModified } from 'src/tests/typescript/swissrets-stubs';
import { performSwissRetsObjectSchemaValidation } from 'src/validator/typescript/validator';

describe('projects[0].localizations[0].attachments.images tests', () => {
  it('Invalid - projects[0].localizations[0].attachments.images must be of type array', () => {
    const clone = stubSrFullModified('projects[0].localizations[0].attachments.images', () => 33);
    const output = performSwissRetsObjectSchemaValidation(clone);

    expect(output[0].message).toBe('must be array');
    expect(output[0].instancePath).toBe('/projects/0/localizations/0/attachments/images');
  });

  it('Invalid - projects[0].localizations[0].attachments.images can be an empty array', () => {
    const clone = stubSrFullModified('projects[0].localizations[0].attachments.images', () => []);
    const output = performSwissRetsObjectSchemaValidation(clone);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });
});
