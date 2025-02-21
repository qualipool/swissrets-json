/* eslint-disable max-statements */
import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { validateSwissRets } from 'src/ts/validator/validator';

import { SwissRetsInventory } from 'src/ts/model/swissrets-model';
import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';

describe('properties[0] tests', () => {
  it('Invalid - properties[0] must be object', () => {
    const invalid = stubSrFullModified('properties[0]', () => []);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be object');
    expect(output[0].instancePath).toBe('/properties/0');
  });

  it('Invalid - properties[0] must not have additional properties', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.assign(invalid.properties![0], { additionalProperty: 'dummy' });
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must NOT have additional properties');
    expect(output[0].instancePath).toBe('/properties/0');
  });

  it('Invalid - properties[0].id must be present', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'properties[0].id');
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe("must have required property 'id'");
    expect(output[0].instancePath).toBe('/properties/0');
  });

  it('Invalid - properties[0].id must be string', () => {
    const invalid = stubSrFullModified('properties[0].id', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/properties/0/id');
  });

  it('Invalid - properties[0].type must be present', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'properties[0].type');
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe("must have required property 'type'");
    expect(output[0].instancePath).toBe('/properties/0');
  });

  it('Invalid - properties[0].type must be string', () => {
    const invalid = stubSrFullModified('properties[0].type', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/properties/0/type');
  });

  it('Invalid - properties[0].referenceId must be present', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'properties[0].referenceId');
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe("must have required property 'referenceId'");
    expect(output[0].instancePath).toBe('/properties/0');
  });

  it('Invalid - properties[0].referenceId must be string', () => {
    const invalid = stubSrFullModified('properties[0].referenceId', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/properties/0/referenceId');
  });

  it('Invalid - properties[0].unitReferenceId must be string', () => {
    const invalid = stubSrFullModified('properties[0].unitReferenceId', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/properties/0/unitReferenceId');
  });

  it('Invalid - properties[0].unitReferenceId if valid, must have corresponding unit', () => {
    const invalid = stubSrFullModified('properties[0].unitReferenceId', () => '4444');
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must pass "sameAs" keyword validation');
    expect(output[0].instancePath).toBe('/properties/0/unitReferenceId');
  });

  it('Valid - properties[0].unitReferenceId is optional', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'properties[0].unitReferenceId');
    const output = validateSwissRets(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Invalid - properties[0].visualReferenceId must be string', () => {
    const invalid = stubSrFullModified('properties[0].visualReferenceId', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/properties/0/visualReferenceId');
  });

  it('Valid - properties[0].visualReferenceId is optional', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'properties[0].visualReferenceId');
    const output = validateSwissRets(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Valid - properties[0].minergieCertification is optional', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'properties[0].minergieCertification');
    const output = validateSwissRets(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Invalid - properties[0].minergieCertification must be string', () => {
    const invalid = stubSrFullModified('properties[0].minergieCertification', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/properties/0/minergieCertification');
  });

  it('Invalid - properties[0].minergieCertification must be equal to one of the allowed values', () => {
    const invalid = stubSrFullModified('properties[0].minergieCertification', () => 'invalid');
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be equal to one of the allowed values');
    expect(output[0].instancePath).toBe('/properties/0/minergieCertification');
  });

  it('Valid - properties[0].created is optional', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'properties[0].created');
    const output = validateSwissRets(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Invalid - properties[0].created must be string', () => {
    const invalid = stubSrFullModified('properties[0].created', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/properties/0/created');
  });

  it('Invalid - properties[0].created must match format "date-time"', () => {
    const invalid = stubSrFullModified('properties[0].created', () => '1-1-1 99:99:99');
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must match format "date-time"');
    expect(output[0].instancePath).toBe('/properties/0/created');
  });

  it('Valid - properties[0].modified is optional', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'properties[0].modified');
    const output = validateSwissRets(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Invalid - properties[0].modified must be string', () => {
    const invalid = stubSrFullModified('properties[0].modified', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/properties/0/modified');
  });

  it('Invalid - properties[0].modified must match format "date-time"', () => {
    const invalid = stubSrFullModified('properties[0].modified', () => '1-1-1 99:99:99');
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must match format "date-time"');
    expect(output[0].instancePath).toBe('/properties/0/modified');
  });

  it('Valid - properties[0].parcelNumbers is optional', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'properties[0].parcelNumbers');
    const output = validateSwissRets(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Invalid - properties[0].parcelNumbers must be string', () => {
    const invalid = stubSrFullModified('properties[0].parcelNumbers', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/properties/0/parcelNumbers');
  });

  it('Valid - properties[0].author is optional', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'properties[0].author');
    const output = validateSwissRets(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Invalid - properties[0].author must be string', () => {
    const invalid = stubSrFullModified('properties[0].author', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/properties/0/author');
  });

  it('Valid - properties[0].buildingZones is optional', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'properties[0].buildingZones');
    const output = validateSwissRets(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Invalid - properties[0].buildingZones must be string', () => {
    const invalid = stubSrFullModified('properties[0].buildingZones', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/properties/0/buildingZones');
  });

  it('Valid - properties[0].development is optional', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'properties[0].development');
    const output = validateSwissRets(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Invalid - properties[0].development must be string', () => {
    const invalid = stubSrFullModified('properties[0].development', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/properties/0/development');
  });

  it('Invalid - properties[0].development must be equal to one of the allowed values', () => {
    const invalid = stubSrFullModified('properties[0].development', () => 'invalid');
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be equal to one of the allowed values');
    expect(output[0].instancePath).toBe('/properties/0/development');
  });

  it('Invalid - properties[0].externalReference must be object', () => {
    const invalid = stubSrFullModified('properties[0].externalReference', () => []);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be object');
    expect(output[0].instancePath).toBe('/properties/0/externalReference');
  });

  it('Valid - properties[0].externalReference is optional', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'properties[0].externalReference');
    const output = validateSwissRets(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Invalid - properties[0].externalReference must not have additional properties', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.assign(invalid.properties![0].externalReference, { additionalProperty: 'dummy' });
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must NOT have additional properties');
    expect(output[0].instancePath).toBe('/properties/0/externalReference');
  });

  it('Valid - properties[0].externalReference.refProperty is optional', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'properties[0].refProperty');
    const output = validateSwissRets(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Invalid - properties[0].externalReference.refProperty must be string', () => {
    const invalid = stubSrFullModified('properties[0].externalReference.refProperty', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/properties/0/externalReference/refProperty');
  });

  it('Valid - properties[0].externalReference.refHouse is optional', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'properties[0].refHouse');
    const output = validateSwissRets(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Invalid - properties[0].externalReference.refHouse must be string', () => {
    const invalid = stubSrFullModified('properties[0].externalReference.refHouse', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/properties/0/externalReference/refHouse');
  });

  it('Valid - properties[0].externalReference.refObject is optional', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(invalid, 'properties[0].refObject');
    const output = validateSwissRets(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Invalid - properties[0].externalReference.refObject must be string', () => {
    const invalid = stubSrFullModified('properties[0].externalReference.refObject', () => 33);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be string');
    expect(output[0].instancePath).toBe('/properties/0/externalReference/refObject');
  });

  it('Valid - properties[0].localizations[0] urls', () => {
    const valid = stubSrFullModified(
      'properties[0].localizations[0].attachments.documents[0].url',
      () => 'http://www.wohnträum.li/tour/gHHJ?ref=text£ä.w'
    );
    const output = validateSwissRets(valid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Valid - properties[0].seller.organization.website.url is valid', () => {
    const valid = stubSrFullModified(
      'properties[0].localizations[0].attachments.youTubeLinks[0].url',
      () => 'http://www.wohnträum.li/tour/gHHJ?ref=text£ä.w'
    );
    const output = validateSwissRets(valid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('Valid - properties[0].seller.inquiryEmail is valid', () => {
    const valid = stubSrFullModified('properties[0].seller.inquiryEmail', () => 'test@email.com');
    const output = validateSwissRets(valid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });

  it('invalid - properties[0].seller.inquiryEmail is not valid', () => {
    const invalid = stubSrFullModified('properties[0].seller.inquiryEmail', () => 'test1234');
    const output = validateSwissRets(invalid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(1);
    expect(output[0].message).toBe('must match pattern "[^@]+@[^\\.]+\\..+"');
    expect(output[0].instancePath).toBe('/properties/0/seller/inquiryEmail');
  });
});
