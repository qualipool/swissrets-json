import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { validateSwissRetsObject } from 'src/ts/validator/validator';

import { SwissRetsInventory } from 'src/ts/model/swissrets-model';
import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';

describe('properties[0].publishers[0].promotions[0] tests', () => {
  it('Invalid - properties[0].publishers[0].promotions[0] must be object', () => {
    const invalid = stubSrFullModified('properties[0].publishers[0].promotions[0]', () => []);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be object');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/promotions/0');
  });

  it('Invalid - properties[0].publishers[0].promotions[0] must not have additional properties', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.assign(invalid.properties![0].publishers![0].promotions![0], { additionalProperty: 'dummy' });
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must NOT have additional properties');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/promotions/0');
  });

  it('Invalid - properties[0].publishers[0].promotions[0].name must be string', () => {
    const invalid = stubSrFullModified('properties[0].publishers[0].promotions[0].name', () => 33);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/promotions/0/name');
  });

  it('Valid - properties[0].publishers[0].promotions[0].name is optional', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'properties[0].publishers[0].promotions[0].name');
    const output = validateSwissRetsObject(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Invalid - properties[0].publishers[0].promotions[0].start must be string', () => {
    const invalid = stubSrFullModified('properties[0].publishers[0].promotions[0].start', () => 33);
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/promotions/0/start');
  });

  it('Valid - properties[0].publishers[0].options[0].promotions[0].start is not optional', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'properties[0].publishers[0].promotions[0].start');
    const output = validateSwissRetsObject(invalid);

    expect(output).toBeDefined();
    expect(output[0].message).toBe(`must have required property 'start'`);
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/promotions/0');
  });

  it('Invalid - properties[0].publishers[0].promotions[0].start must match format "date-time"', () => {
    const invalid = stubSrFullModified(
      'properties[0].publishers[0].promotions[0].start',
      () => '1-1-1 99:99:99'
    );
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must match format "date-time"');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/promotions/0/start');
  });

  it('Invalid - properties[0].publishers[0].promotions[0].start must have timezone', () => {
    const invalid = stubSrFullModified(
      'properties[0].publishers[0].promotions[0].start',
      () => '11-11-11 11:11:11'
    );
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must match format "date-time"');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/promotions/0/start');
  });

  it('Invalid - properties[0].publishers[0].promotions[0].expiration must be string', () => {
    const invalid = stubSrFullModified(
      'properties[0].publishers[0].promotions[0].expiration',
      () => 33
    );
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/promotions/0/expiration');
  });

  it('Valid - properties[0].publishers[0].options[0].promotions[0].expiration is not optional', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'properties[0].publishers[0].promotions[0].expiration');
    const output = validateSwissRetsObject(invalid);

    expect(output).toBeDefined();
    expect(output[0].message).toBe(`must have required property 'expiration'`);
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/promotions/0');
  });

  it('Invalid - properties[0].publishers[0].promotions[0].expiration must match format "date-time"', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.update(
      invalid,
      'properties[0].publishers[0].promotions[0].expiration',
      () => '1-1-1 99:99:99'
    );
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must match format "date-time"');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/promotions/0/expiration');
  });

  it('Invalid - properties[0].publishers[0].promotions[0].expiration must have timezone', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.update(
      invalid,
      'properties[0].publishers[0].promotions[0].expiration',
      () => '11-11-11 11:11:11'
    );
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must match format "date-time"');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/promotions/0/expiration');
  });
});
