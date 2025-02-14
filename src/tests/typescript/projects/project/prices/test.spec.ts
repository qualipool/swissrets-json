import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { performSwissRetsObjectSchemaValidation } from 'src/validator/typescript/validator';

import { SwissRetsInventory } from 'src/model/typescript/swissrets-model';
import { stubSrFullModified } from 'src/tests/typescript/swissrets-stubs';

describe('projects[0].prices tests', () => {
  it('Invalid - projects[0].prices cannot have additional properties', () => {
    const clone = _.cloneDeep(validListing) as SwissRetsInventory;
    _.assign(clone.projects![0].prices, { additionalProperty: 'additionalProperty' });
    const output = performSwissRetsObjectSchemaValidation(clone);

    expect(output[0].message).toBe('must NOT have additional properties');
    expect(output[0].instancePath).toBe('/projects/0/prices');
  });

  it('Invalid - projects[0].prices must be of type object', () => {
    const clone = stubSrFullModified('projects[0].prices', () => 33);
    const output = performSwissRetsObjectSchemaValidation(clone);

    expect(output[0].message).toBe('must be object');
    expect(output[0].instancePath).toBe('/projects/0/prices');
  });

  it('Invalid - projects[0].prices.currency must be present', () => {
    const clone = _.cloneDeep(validListing) as SwissRetsInventory;
    _.unset(clone, 'projects[0].prices.currency');
    const output = performSwissRetsObjectSchemaValidation(clone);

    expect(output[0].message).toBe("must have required property 'currency'");
    expect(output[0].instancePath).toBe('/projects/0/prices');
  });

  it('Invalid - projects[0].prices.currency must be of certain pattern', () => {
    const invalid = stubSrFullModified('projects[0].prices.currency', () => 'fff.fff');
    const output = performSwissRetsObjectSchemaValidation(invalid);

    expect(output[0].message).toBe('must match pattern "^[A-Z]{3}$"');
    expect(output[0].instancePath).toBe('/projects/0/prices/currency');
  });
});
