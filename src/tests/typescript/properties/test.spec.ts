import _ from 'lodash';
import { performSwissRetsObjectSchemaValidation } from 'src/validator/typescript/validator';

import { stubSrFullModified } from 'src/tests/typescript/swissrets-stubs';

describe('properties tests', () => {
  it('Invalid - properties must be array', () => {
    const invalid = stubSrFullModified('properties', () => ({}));
    const output = performSwissRetsObjectSchemaValidation(invalid);

    expect(output[0].message).toBe('must be array');
    expect(output[0].instancePath).toBe('/properties');
  });

  it('Valid - properties can be empty array', () => {
    const valid = stubSrFullModified('properties', () => []);
    const output = performSwissRetsObjectSchemaValidation(valid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });
});
