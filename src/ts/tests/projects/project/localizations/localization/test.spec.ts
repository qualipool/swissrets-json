import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { validateSwissRetsObject } from 'src/ts/validator/validator';

import { SwissRetsInventory } from 'src/ts/model/swissrets-model';
import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';

describe('projects[0].localizations[0] tests', () => {
  it('Invalid - projects[0].localizations[0] must be object', () => {
    const clone = stubSrFullModified('projects[0].localizations[0]', () => 33);
    const output = validateSwissRetsObject(clone);

    expect(output[0].message).toBe('must be object');
    expect(output[0].instancePath).toBe('/projects/0/localizations/0');
  });

  it('Invalid - projects[0].localizations[0] cannot have additional properties', () => {
    const clone = _.cloneDeep(validListing) as SwissRetsInventory;
    _.assign(clone.projects![0].localizations![0], { additionalProperty: 'additionalProperty' });
    const output = validateSwissRetsObject(clone);

    expect(output[0].message).toBe('must NOT have additional properties');
    expect(output[0].instancePath).toBe('/projects/0/localizations/0');
  });

  it('Invalid - projects[0].localizations[0].languageCode must be present', () => {
    const clone = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(clone, 'projects[0].localizations[0].languageCode');
    const output = validateSwissRetsObject(clone);

    expect(output[0].message).toBe("must have required property 'languageCode'");
    expect(output[0].instancePath).toBe('/projects/0/localizations/0');
  });

  it('Invalid - projects[0].localizations[0].languageCode must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].localizations[0].languageCode', () => 33);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/localizations/0/languageCode');
  });

  it('Invalid - projects[0].localizations[0].languageCode must be of certain pattern', () => {
    const invalid = stubSrFullModified('projects[0].localizations[0].languageCode', () => '33');
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must match pattern "^[a-z]{2}$"');
    expect(output[0].instancePath).toBe('/projects/0/localizations/0/languageCode');
  });

  it('Invalid - projects[0].localizations[0].languageCode must have', () => {
    const invalid = stubSrFullModified('projects[0].localizations[0].languageCode', () => '33');
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must match pattern "^[a-z]{2}$"');
    expect(output[0].instancePath).toBe('/projects/0/localizations/0/languageCode');
  });

  it('Invalid - projects[0].localizations[0].languageCode must not have more than 2 characters', () => {
    const invalid = stubSrFullModified('projects[0].localizations[0].languageCode', () => 'ffff');
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must NOT have more than 2 characters');
    expect(output[0].instancePath).toBe('/projects/0/localizations/0/languageCode');
  });

  it('Invalid - projects[0].localizations[0].languageCode must not have fewer than 2 characters', () => {
    const invalid = stubSrFullModified('projects[0].localizations[0].languageCode', () => 'f');
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must NOT have fewer than 2 characters');
    expect(output[0].instancePath).toBe('/projects/0/localizations/0/languageCode');
  });

  it('Invalid - projects[0].localizations[0].title must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].localizations[0].title', () => 33);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/localizations/0/title');
  });

  it('Invalid - projects[0].localizations[0].excerpt must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].localizations[0].excerpt', () => 33);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/localizations/0/excerpt');
  });

  it('Invalid - projects[0].localizations[0].description must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].localizations[0].description', () => 33);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/localizations/0/description');
  });
});
