import _ from 'lodash';
import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';
import { validateSwissRetsObject } from 'src/ts/validator/validator';

describe('projects[0].localizations[0].attachments.images tests', () => {
  it('Invalid - projects[0].localizations[0].attachments.images must be of type array', () => {
    const clone = stubSrFullModified('projects[0].localizations[0].attachments.images', () => 33);
    const output = validateSwissRetsObject(clone);

    expect(output[0].message).toBe('must be array');
    expect(output[0].instancePath).toBe('/projects/0/localizations/0/attachments/images');
  });

  it('Invalid - projects[0].localizations[0].attachments.images can be an empty array', () => {
    const clone = stubSrFullModified('projects[0].localizations[0].attachments.images', () => []);
    const output = validateSwissRetsObject(clone);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });
});
