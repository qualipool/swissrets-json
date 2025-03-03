import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { validateSwissRets } from 'src/ts/validator/validator';

import { SwissRetsInventory } from 'src/ts/model/swissrets-model';
import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';

describe('projects[0].characteristics tests', () => {
  it('Invalid - projects[0].characteristics is of invalid type', () => {
    const invalid = stubSrFullModified('projects[0].characteristics', () => []);
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be object');
    expect(output[0].instancePath).toBe('/projects/0/characteristics');
  });

  it('Invalid - projects[0].characteristics has additional properties', () => {
    const invalid = _.cloneDeep(validListing) as SwissRetsInventory;
    _.assign(invalid.projects![0].characteristics, { additionalProperty: 'dummy' });
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must NOT have additional properties');
    expect(output[0].instancePath).toBe('/projects/0/characteristics');
  });

  it('Invalid - projects[0].characteristics characteristics have invalid type', () => {
    const invalid = stubSrFullModified('projects[0].characteristics', () => {
      return {
        areaSiaNfFrom: 'a',
        areaSiaNfTo: 'a',
        areaBwfFrom: 'a',
        areaBwfTo: 'a',
        numberOfRoomsFrom: 'a',
        numberOfRoomsTo: 'a',
        numberOfResidentialUnits: 'a',
        numberOfCommercialUnits: 'a'
      };
    });
    const output = validateSwissRets(invalid);

    expect(output[0].instancePath).toBe('/projects/0/characteristics/areaSiaNfFrom');
    expect(output[0].message).toBe('must be number');
    expect(output[1].instancePath).toBe('/projects/0/characteristics/areaSiaNfTo');
    expect(output[1].message).toBe('must be number');
    expect(output[2].instancePath).toBe('/projects/0/characteristics/areaBwfFrom');
    expect(output[2].message).toBe('must be number');
    expect(output[3].instancePath).toBe('/projects/0/characteristics/areaBwfTo');
    expect(output[3].message).toBe('must be number');
    expect(output[4].instancePath).toBe('/projects/0/characteristics/numberOfRoomsFrom');
    expect(output[4].message).toBe('must be number');
    expect(output[5].instancePath).toBe('/projects/0/characteristics/numberOfRoomsTo');
    expect(output[5].message).toBe('must be number');
    expect(output[6].instancePath).toBe('/projects/0/characteristics/numberOfResidentialUnits');
    expect(output[6].message).toBe('must be number');
    expect(output[7].instancePath).toBe('/projects/0/characteristics/numberOfCommercialUnits');
    expect(output[7].message).toBe('must be number');
  });

  it('Invalid - projects[0].characteristics characteristics have invalid value', () => {
    const invalid = stubSrFullModified('projects[0].characteristics', () => {
      return {
        areaSiaNfFrom: -1,
        areaSiaNfTo: -1,
        areaBwfFrom: -1,
        areaBwfTo: -1,
        numberOfRoomsFrom: -1,
        numberOfRoomsTo: -1,
        numberOfResidentialUnits: -1,
        numberOfCommercialUnits: -1
      };
    });
    const output = validateSwissRets(invalid);

    expect(output[0].instancePath).toBe('/projects/0/characteristics/areaSiaNfFrom');
    expect(output[0].message).toBe('must be >= 0');
    expect(output[1].instancePath).toBe('/projects/0/characteristics/areaSiaNfTo');
    expect(output[1].message).toBe('must be >= 0');
    expect(output[2].instancePath).toBe('/projects/0/characteristics/areaBwfFrom');
    expect(output[2].message).toBe('must be >= 0');
    expect(output[3].instancePath).toBe('/projects/0/characteristics/areaBwfTo');
    expect(output[3].message).toBe('must be >= 0');
    expect(output[4].instancePath).toBe('/projects/0/characteristics/numberOfRoomsFrom');
    expect(output[4].message).toBe('must be >= 0');
    expect(output[5].instancePath).toBe('/projects/0/characteristics/numberOfRoomsTo');
    expect(output[5].message).toBe('must be >= 0');
    expect(output[6].instancePath).toBe('/projects/0/characteristics/numberOfResidentialUnits');
    expect(output[6].message).toBe('must be >= 0');
    expect(output[7].instancePath).toBe('/projects/0/characteristics/numberOfCommercialUnits');
    expect(output[7].message).toBe('must be >= 0');
  });
});
