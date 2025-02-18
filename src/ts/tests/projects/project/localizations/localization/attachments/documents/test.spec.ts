import _ from 'lodash';
import { validateSwissRetsObject } from 'src/ts/validator/validator';

import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';

describe('projects[0].localizations[0].attachments.documents tests', () => {
  it('Invalid - projects[0].localizations[0].attachments.documents must be of type array', () => {
    const clone = stubSrFullModified(
      'projects[0].localizations[0].attachments.documents',
      () => 33
    );
    const output = validateSwissRetsObject(clone);

    expect(output[0].message).toBe('must be array');
    expect(output[0].instancePath).toBe('/projects/0/localizations/0/attachments/documents');
  });

  it('Invalid - projects[0].localizations[0].attachments.documents can be an empty array', () => {
    const clone = stubSrFullModified(
      'projects[0].localizations[0].attachments.documents',
      () => []
    );
    const output = validateSwissRetsObject(clone);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });
});
