import _ from 'lodash';
import { validateSwissRets } from 'src/ts/validator/validator';

import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';

describe('projects[0].localizations[0].attachments.landRegisterExtracts tests', () => {
  it('Invalid - projects[0].localizations[0].attachments.landRegisterExtracts must be of type array', () => {
    const clone = stubSrFullModified(
      'projects[0].localizations[0].attachments.landRegisterExtracts',
      () => 33
    );
    const output = validateSwissRets(clone);

    expect(output[0].message).toBe('must be array');
    expect(output[0].instancePath).toBe(
      '/projects/0/localizations/0/attachments/landRegisterExtracts'
    );
  });

  it('Invalid - projects[0].localizations[0].attachments.landRegisterExtracts can be an empty array', () => {
    const clone = stubSrFullModified(
      'projects[0].localizations[0].attachments.landRegisterExtracts',
      () => []
    );
    const output = validateSwissRets(clone);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });
});
