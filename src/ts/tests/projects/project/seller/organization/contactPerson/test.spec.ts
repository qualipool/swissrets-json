import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { validateSwissRets } from 'src/ts/validator/validator';

import { SwissRetsInventory } from 'src/ts/model/swissrets-model';
import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';

describe('projects[0].seller.contactPerson tests', () => {
  it('Valid - projects[0].seller.contactPerson can be omitted', () => {
    const clone = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(clone, 'projects[0].seller.contactPerson');
    const output = validateSwissRets(clone);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Valid - projects[0].seller.contactPerson can be empty object', () => {
    const clone = stubSrFullModified('projects[0].seller.contactPerson', () => ({}));
    const output = validateSwissRets(clone);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Invalid - projects[0].seller.contactPerson cannot have additional properties', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.assign(invalid.projects![0].seller!.contactPerson, {
      additionalProperty: 'additionalProperty'
    });
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must NOT have additional properties');
    expect(output[0].instancePath).toBe('/projects/0/seller/contactPerson');
  });

  it('Invalid - projects[0].seller.contactPerson must be of type object', () => {
    const invalid = stubSrFullModified('projects[0].seller.contactPerson', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be object');
    expect(output[0].instancePath).toBe('/projects/0/seller/contactPerson');
  });

  it('Invalid - projects[0].seller.contactPerson.gender must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].seller.contactPerson.gender', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/contactPerson/gender');
  });

  it('Invalid - projects[0].seller.contactPerson.function must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].seller.contactPerson.function', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/contactPerson/function');
  });

  it('Invalid - projects[0].seller.contactPerson.givenName must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].seller.contactPerson.givenName', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/contactPerson/givenName');
  });

  it('Invalid - projects[0].seller.contactPerson.familyName must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].seller.contactPerson.familyName', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/contactPerson/familyName');
  });

  it('Invalid - projects[0].seller.contactPerson.note must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].seller.contactPerson.note', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/contactPerson/note');
  });

  it('Invalid - projects[0].seller.contactPerson.email must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].seller.contactPerson.email', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/contactPerson/email');
  });

  it('Invalid - projects[0].seller.contactPerson.email must be of certain pattern', () => {
    const invalid = stubSrFullModified('projects[0].seller.contactPerson.email', () => 'fff.fff');
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must match pattern "[^@]+@[^\\.]+\\..+"');
    expect(output[0].instancePath).toBe('/projects/0/seller/contactPerson/email');
  });

  it('Invalid - projects[0].seller.contactPerson.phone must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].seller.contactPerson.phone', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/contactPerson/phone');
  });

  it('Invalid - projects[0].seller.contactPerson.phone must be of certain pattern', () => {
    const invalid = stubSrFullModified('projects[0].seller.contactPerson.phone', () => '44');
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must match pattern "^[+]?([0-9] )*[0-9]{3,}$"');
    expect(output[0].instancePath).toBe('/projects/0/seller/contactPerson/phone');
  });

  it('Invalid - projects[0].seller.contactPerson.mobile must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].seller.contactPerson.mobile', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/contactPerson/mobile');
  });

  it('Invalid - projects[0].seller.contactPerson.mobile must be of certain pattern', () => {
    const invalid = stubSrFullModified('projects[0].seller.contactPerson.mobile', () => '44');
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must match pattern "^[+]?([0-9] )*[0-9]{3,}$"');
    expect(output[0].instancePath).toBe('/projects/0/seller/contactPerson/mobile');
  });
});
