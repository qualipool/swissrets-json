import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { validateSwissRets } from 'src/ts/validator/validator';

import { SwissRetsInventory } from 'src/ts/model/swissrets-model';
import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';

describe('projects[0].localizations[0].attachments.landRegisterExtracts[0] tests', () => {
  it('Invalid - projects[0].localizations[0].attachments.landRegisterExtracts[0] must be object', () => {
    const clone = stubSrFullModified(
      'projects[0].localizations[0].attachments.landRegisterExtracts[0]',
      () => 33
    );
    const output = validateSwissRets(clone);

    expect(output[0].message).toBe('must be object');
    expect(output[0].instancePath).toBe(
      '/projects/0/localizations/0/attachments/landRegisterExtracts/0'
    );
  });

  it('Invalid - projects[0].localizations[0].attachments.landRegisterExtracts[0] cannot have additional properties', () => {
    const clone = _.cloneDeep(validListing) as SwissRetsInventory;
    _.assign(clone.projects![0].localizations![0].attachments!.landRegisterExtracts![0], {
      additionalProperty: 'additionalProperty'
    });
    const output = validateSwissRets(clone);

    expect(output[0].message).toBe('must NOT have additional properties');
    expect(output[0].instancePath).toBe(
      '/projects/0/localizations/0/attachments/landRegisterExtracts/0'
    );
  });

  it('Invalid - projects[0].localizations[0].attachments.landRegisterExtracts[0].url must be present', () => {
    const clone = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(clone, 'projects[0].localizations[0].attachments.landRegisterExtracts[0].url');
    const output = validateSwissRets(clone);

    expect(output[0].message).toBe("must have required property 'url'");
    expect(output[0].instancePath).toBe(
      '/projects/0/localizations/0/attachments/landRegisterExtracts/0'
    );
  });

  it('Invalid - projects[0].localizations[0].attachments.landRegisterExtracts[0].url must be string', () => {
    const clone = stubSrFullModified(
      'projects[0].localizations[0].attachments.landRegisterExtracts[0].url',
      () => 33
    );
    const output = validateSwissRets(clone);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe(
      '/projects/0/localizations/0/attachments/landRegisterExtracts/0/url'
    );
  });

  it('Invalid - projects[0].localizations[0].attachments.landRegisterExtracts[0].title must be string', () => {
    const clone = stubSrFullModified(
      'projects[0].localizations[0].attachments.landRegisterExtracts[0].title',
      () => 33
    );
    const output = validateSwissRets(clone);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe(
      '/projects/0/localizations/0/attachments/landRegisterExtracts/0/title'
    );
  });

  it('Valid - projects[0].localizations[0].attachments.landRegisterExtracts[0].title is optional', () => {
    const clone = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(clone, 'projects[0].localizations[0].attachments.landRegisterExtracts[0].title');
    const output = validateSwissRets(clone);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Invalid - projects[0].localizations[0].attachments.landRegisterExtracts[0].mimeType must be string', () => {
    const clone = stubSrFullModified(
      'projects[0].localizations[0].attachments.landRegisterExtracts[0].mimeType',
      () => 33
    );
    const output = validateSwissRets(clone);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe(
      '/projects/0/localizations/0/attachments/landRegisterExtracts/0/mimeType'
    );
  });

  it('Valid - projects[0].localizations[0].attachments.landRegisterExtracts[0].mimeType is optional', () => {
    const clone = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(clone, 'projects[0].localizations[0].attachments.landRegisterExtracts[0].mimeType');
    const output = validateSwissRets(clone);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });
});
