/* eslint-disable max-statements */
import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { validateSwissRets } from 'src/ts/validator/validator';
import { SwissRetsInventory } from 'src/ts/model/swissrets-model';
import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';

describe('properties[0].propertyOwner tests', () => {

    it('Valid - properties.propertyOwner is optional', () => {
      const valid = _.cloneDeep(validListing) as SwissRetsInventory;
      _.unset(valid, 'properties.propertyOwner');
      const output = validateSwissRets(valid);

      expect(output).toBeDefined();
      expect(output).toHaveLength(0);
    });

    it('Invalid - properties.propertyOwner must be an object', () => {
        const invalid = stubSrFullModified('properties[0].propertyOwner', () => 44);
        const output = validateSwissRets(invalid);

        expect(output[0].message).toBe('must be object');
        expect(output[0].instancePath).toBe('/properties/0/propertyOwner');
    });

    it('Invalid - properties.propertyOwner cannot have additional properties', () => {
        const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
        _.assign(invalid.properties![0].propertyOwner, { additionalProperty: 'dummy' });
        const output = validateSwissRets(invalid);

        expect(output[0].message).toBe('must NOT have additional properties');
        expect(output[0].instancePath).toBe('/properties/0/propertyOwner');
    });

    it('Valid - properties.propertyOwner.companyName is optional', () => {
        const valid = _.cloneDeep(validListing) as SwissRetsInventory;
        _.unset(valid, 'properties.propertyOwner.companyName');
        const output = validateSwissRets(valid);

        expect(output).toBeDefined();
        expect(output).toHaveLength(0);
    });

    it('Invalid - properties[0].propertyOwner.companyName must be string', () => {
        const invalid = stubSrFullModified('properties[0].propertyOwner.companyName', () => 33);
        const output = validateSwissRets(invalid);

        expect(output[0].message).toBe('must be string');
        expect(output[0].instancePath).toBe('/properties/0/propertyOwner/companyName');
    });

    it('Valid - properties.propertyOwner.givenName is optional', () => {
        const valid = _.cloneDeep(validListing) as SwissRetsInventory;
        _.unset(valid, 'properties.propertyOwner.givenName');
        const output = validateSwissRets(valid);

        expect(output).toBeDefined();
        expect(output).toHaveLength(0);
    });

    it('Invalid - properties[0].propertyOwner.givenName must be string', () => {
        const invalid = stubSrFullModified('properties[0].propertyOwner.givenName', () => 33);
        const output = validateSwissRets(invalid);

        expect(output[0].message).toBe('must be string');
        expect(output[0].instancePath).toBe('/properties/0/propertyOwner/givenName');
    });

    it('Valid - properties.propertyOwner.familyName is optional', () => {
        const valid = _.cloneDeep(validListing) as SwissRetsInventory;
        _.unset(valid, 'properties.propertyOwner.familyName');
        const output = validateSwissRets(valid);

        expect(output).toBeDefined();
        expect(output).toHaveLength(0);
    });

    it('Invalid - properties[0].propertyOwner.familyName must be string', () => {
        const invalid = stubSrFullModified('properties[0].propertyOwner.familyName', () => 33);
        const output = validateSwissRets(invalid);

        expect(output[0].message).toBe('must be string');
        expect(output[0].instancePath).toBe('/properties/0/propertyOwner/familyName');
    });

    it('Valid - properties.propertyOwner.email is optional', () => {
        const valid = _.cloneDeep(validListing) as SwissRetsInventory;
        _.unset(valid, 'properties.propertyOwner.email');
        const output = validateSwissRets(valid);

        expect(output).toBeDefined();
        expect(output).toHaveLength(0);
    });

    it('Invalid - properties[0].propertyOwner.email must be string', () => {
        const invalid = stubSrFullModified('properties[0].propertyOwner.email', () => 33);
        const output = validateSwissRets(invalid);

        expect(output[0].message).toBe('must be string');
        expect(output[0].instancePath).toBe('/properties/0/propertyOwner/email');
    });

    it('Invalid - properties[0].propertyOwner.email must be of certain pattern', () => {
        const invalid = stubSrFullModified('properties[0].propertyOwner.email', () => 'fff.fff');
        const output = validateSwissRets(invalid);

        expect(output[0].message).toBe('must match pattern "[^@]+@[^\\.]+\\..+"');
        expect(output[0].instancePath).toBe('/properties/0/propertyOwner/email');
    });
});
