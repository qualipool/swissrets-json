import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { validateSwissRetsObject } from 'src/ts/validator/validator';

import { SwissRetsInventory } from 'src/ts/model/swissrets-model';
import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';

describe('properties[0].publishers[0].options[0] tests', () => {
  it('Invalid - properties[0].publishers[0].options[0] must be object', () => {
    const invalid = stubSrFullModified('properties[0].publishers[0].options[0]', () => []);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be object');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/options/0');
  });

  it('Invalid - properties[0].publishers[0].options[0] must not have additional properties', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.assign(invalid.properties![0].publishers![0].options![0], { additionalProperty: 'dummy' });
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must NOT have additional properties');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/options/0');
  });

  it('Invalid - properties[0].publishers[0].options[0].key must be present', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'properties[0].publishers[0].options[0].key');
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe("must have required property 'key'");
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/options/0');
  });

  it('Invalid - properties[0].publishers[0].options[0].key must be string', () => {
    const invalid = stubSrFullModified('properties[0].publishers[0].options[0].key', () => 33);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/options/0/key');
  });

  it('Invalid - properties[0].publishers[0].options[0].value must be present', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'properties[0].publishers[0].options[0].value');
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe("must have required property 'value'");
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/options/0');
  });

  it('Invalid - properties[0].publishers[0].options[0].value must be string', () => {
    const invalid = stubSrFullModified('properties[0].publishers[0].options[0].value', () => 33);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/options/0/value');
  });

  it('Valid - properties[0].publishers[0].options[0].start is optional', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'properties[0].publishers[0].options[0].start');
    const output = validateSwissRetsObject(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Invalid - properties[0].publishers[0].options[0].start must be string', () => {
    const invalid = stubSrFullModified('properties[0].publishers[0].options[0].start', () => 33);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/options/0/start');
  });

  it('Invalid - properties[0].publishers[0].options[0].start must match format "date-time"', () => {
    const invalid = stubSrFullModified(
      'properties[0].publishers[0].options[0].start',
      () => '1-1-1 99:99:99'
    );
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must match format "date-time"');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/options/0/start');
  });

  it('Valid - properties[0].publishers[0].options[0].expiration is optional', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'properties[0].publishers[0].options[0].expiration');
    const output = validateSwissRetsObject(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Invalid - properties[0].publishers[0].options[0].expiration must be string', () => {
    const invalid = stubSrFullModified(
      'properties[0].publishers[0].options[0].expiration',
      () => 33
    );
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/options/0/expiration');
  });

  it('Invalid - properties[0].publishers[0].options[0].expiration must match format "date-time"', () => {
    const invalid = stubSrFullModified(
      'properties[0].publishers[0].options[0].expiration',
      () => '1-1-1 99:99:99'
    );
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must match format "date-time"');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/options/0/expiration');
  });

  it('Valid - properties[0].publishers[0].options[0].languageCode is optional', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'properties[0].publishers[0].options[0].languageCode');
    const output = validateSwissRetsObject(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Invalid - properties[0].publishers[0].options[0].languageCode must be string', () => {
    const invalid = stubSrFullModified(
      'properties[0].publishers[0].options[0].languageCode',
      () => 33
    );
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/options/0/languageCode');
  });

  it('Invalid - properties[0].publishers[0].options[0].languageCode must not have more than 2 characters', () => {
    const invalid = stubSrFullModified(
      'properties[0].publishers[0].options[0].languageCode',
      () => 'cbr'
    );
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must NOT have more than 2 characters');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/options/0/languageCode');
  });

  it('Invalid - properties[0].publishers[0].options[0].languageCode must not have fewer than 2 characters', () => {
    const invalid = stubSrFullModified(
      'properties[0].publishers[0].options[0].languageCode',
      () => 'c'
    );
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must NOT have fewer than 2 characters');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/options/0/languageCode');
  });

  it('Invalid - properties[0].publishers[0].options[0].languageCode must match pattern "^[a-z]{2}$"', () => {
    const invalid = stubSrFullModified(
      'properties[0].publishers[0].options[0].languageCode',
      () => '%&'
    );
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must match pattern "^[a-z]{2}$"');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/options/0/languageCode');
  });
});
