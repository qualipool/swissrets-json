import _ from 'lodash';
import { validateSwissRets } from 'src/ts/validator/validator';

import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';

describe('projects[0].localizations[0].attachments.plans tests', () => {
  it('Invalid - projects[0].localizations[0].attachments.plans must be of type array', () => {
    const clone = stubSrFullModified('projects[0].localizations[0].attachments.plans', () => 33);
    const output = validateSwissRets(clone);

    expect(output[0].message).toBe('must be array');
    expect(output[0].instancePath).toBe('/projects/0/localizations/0/attachments/plans');
  });

  it('Invalid - projects[0].localizations[0].attachments.plans can be an empty array', () => {
    const clone = stubSrFullModified('projects[0].localizations[0].attachments.plans', () => []);
    const output = validateSwissRets(clone);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });
});
