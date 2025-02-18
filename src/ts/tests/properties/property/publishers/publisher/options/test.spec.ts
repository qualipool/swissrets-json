import _ from 'lodash';
import { validateSwissRetsObject } from 'src/ts/validator/validator';

import { stubSrFullModified } from 'src/ts/tests/resources/swissrets-stubs';

describe('properties[0].publishers[0].options tests', () => {
  it('Invalid - properties[0].publishers[0].options must be array', () => {
    const invalid = stubSrFullModified('properties[0].publishers[0].options', () => ({}));
    const output = validateSwissRetsObject(invalid);

    expect(output[0].message).toBe('must be array');
    expect(output[0].instancePath).toBe('/properties/0/publishers/0/options');
  });

  it('Valid - properties[0].publishers[0].options can be empty array', () => {
    const valid = stubSrFullModified('properties[0].publishers[0].options', () => []);
    const output = validateSwissRetsObject(valid);

    expect(output).toBeDefined();
    expect(output).toHaveLength(0);
  });
});
