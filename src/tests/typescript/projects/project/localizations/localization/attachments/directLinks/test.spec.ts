import _ from 'lodash';
import { performSwissRetsObjectSchemaValidation } from 'src/validator/typescript/validator';

import { stubSrFullModified } from 'src/tests/typescript/swissrets-stubs';

describe('projects[0].localizations[0].attachments.directLinks tests', () => {
  it('Invalid - projects[0].localizations[0].attachments.directLinks must be of type array', () => {
    const clone = stubSrFullModified(
      'projects[0].localizations[0].attachments.directLinks',
      () => 33
    );
    const output = performSwissRetsObjectSchemaValidation(clone);

    expect(output[0].message).toBe('must be array');
    expect(output[0].instancePath).toBe('/projects/0/localizations/0/attachments/directLinks');
  });

  it('Invalid - projects[0].localizations[0].attachments.directLinks can be an empty array', () => {
    const clone = stubSrFullModified(
      'projects[0].localizations[0].attachments.directLinks',
      () => []
    );
    const output = performSwissRetsObjectSchemaValidation(clone);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });
});
