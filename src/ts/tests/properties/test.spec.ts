import _ from 'lodash';
import { validateSwissRets } from 'src/ts/validator/validator';

import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';

describe('properties tests', () => {
  it('Invalid - properties must be array', () => {
    const invalid = stubSrFullModified('properties', () => ({}));
    const output = validateSwissRets(invalid);

    expect(output[0].message).toBe('must be array');
    expect(output[0].instancePath).toBe('/properties');
  });

  it('Valid - properties can be empty array', () => {
    const valid = stubSrFullModified('properties', () => []);
    const output = validateSwissRets(valid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });
});
