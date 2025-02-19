import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { validateSwissRets } from 'src/ts/validator/validator';

import { SwissRetsInventory } from 'src/ts/model/swissrets-model';
import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';

describe('projects[0].localizations[0].attachments tests', () => {
  it('Invalid - projects[0].localizations[0].attachments must be object', () => {
    const clone = stubSrFullModified('projects[0].localizations[0].attachments', () => 33);
    const output = validateSwissRets(clone);

    expect(output[0].message).toBe('must be object');
    expect(output[0].instancePath).toBe('/projects/0/localizations/0/attachments');
  });

  it('Invalid - projects[0].localizations[0].attachments must not have additional properties', () => {
    const clone = _.cloneDeep(validListing) as SwissRetsInventory;
    _.assign(clone.projects![0].localizations![0].attachments, {
      additionalProperty: 'additionalProperty'
    });
    const output = validateSwissRets(clone);

    expect(output[0].message).toBe('must NOT have additional properties');
    expect(output[0].instancePath).toBe('/projects/0/localizations/0/attachments');
  });

  it('Valid - projects[0].localizations[0].attachments can be an empty object', () => {
    const invalid = stubSrFullModified('projects[0].localizations[0].attachments', () => ({}));
    const output = validateSwissRets(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });
});
