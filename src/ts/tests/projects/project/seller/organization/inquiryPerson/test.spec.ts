import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { validateSwissRets } from 'src/ts/validator/validator';

import { SwissRetsInventory } from 'src/ts/model/swissrets-model';
import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';

describe('projects[0].seller.inquiryPerson tests', () => {
  it('Valid - projects[0].seller.inquiryPerson can be omitted', () => {
    const clone = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(clone, 'projects[0].seller.inquiryPerson');
    const output = validateSwissRets(clone);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Valid - projects[0].seller.inquiryPerson can be empty object', () => {
    const clone = stubSrFullModified('projects[0].seller.inquiryPerson', () => ({}));
    const output = validateSwissRets(clone);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Invalid - projects[0].seller.inquiryPerson cannot have additional properties', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.assign(invalid.projects![0].seller!.inquiryPerson, {
      additionalProperty: 'additionalProperty'
    });
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must NOT have additional properties');
    expect(output[0].instancePath).toBe('/projects/0/seller/inquiryPerson');
  });

  it('Invalid - projects[0].seller.inquiryPerson must be of type object', () => {
    const invalid = stubSrFullModified('projects[0].seller.inquiryPerson', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be object');
    expect(output[0].instancePath).toBe('/projects/0/seller/inquiryPerson');
  });

  it('Invalid - projects[0].seller.inquiryPerson.gender must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].seller.inquiryPerson.gender', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/inquiryPerson/gender');
  });

  it('Invalid - projects[0].seller.inquiryPerson.function must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].seller.inquiryPerson.function', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/inquiryPerson/function');
  });

  it('Invalid - projects[0].seller.inquiryPerson.givenName must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].seller.inquiryPerson.givenName', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/inquiryPerson/givenName');
  });

  it('Invalid - projects[0].seller.inquiryPerson.familyName must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].seller.inquiryPerson.familyName', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/inquiryPerson/familyName');
  });

  it('Invalid - projects[0].seller.inquiryPerson.note must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].seller.inquiryPerson.note', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/inquiryPerson/note');
  });

  it('Invalid - projects[0].seller.inquiryPerson.email must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].seller.inquiryPerson.email', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/inquiryPerson/email');
  });

  it('Invalid - projects[0].seller.inquiryPerson.email must be of certain pattern', () => {
    const invalid = stubSrFullModified('projects[0].seller.inquiryPerson.email', () => 'fff.fff');
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must match pattern "[^@]+@[^\\.]+\\..+"');
    expect(output[0].instancePath).toBe('/projects/0/seller/inquiryPerson/email');
  });

  it('Invalid - projects[0].seller.inquiryPerson.phone must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].seller.inquiryPerson.phone', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/inquiryPerson/phone');
  });

  it('Invalid - projects[0].seller.inquiryPerson.phone must be of certain pattern', () => {
    const invalid = stubSrFullModified('projects[0].seller.inquiryPerson.phone', () => '44');
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must match pattern "^[+]?([0-9] )*[0-9]{3,}$"');
    expect(output[0].instancePath).toBe('/projects/0/seller/inquiryPerson/phone');
  });

  it('Invalid - projects[0].seller.inquiryPerson.mobile must be of type string', () => {
    const invalid = stubSrFullModified('projects[0].seller.inquiryPerson.mobile', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/projects/0/seller/inquiryPerson/mobile');
  });

  it('Invalid - projects[0].seller.inquiryPerson.mobile must be of certain pattern', () => {
    const invalid = stubSrFullModified('projects[0].seller.inquiryPerson.mobile', () => '44');
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must match pattern "^[+]?([0-9] )*[0-9]{3,}$"');
    expect(output[0].instancePath).toBe('/projects/0/seller/inquiryPerson/mobile');
  });
});
