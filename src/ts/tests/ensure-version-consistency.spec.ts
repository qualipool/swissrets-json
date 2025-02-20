import fs from 'fs';
import path from 'path';
import { SwissRetsInventory } from '../model/swissrets-model';
import { SwissRetsVersion } from '../model/swissrets-version';

describe('sample files should match SwissRetsVersion.current', () => {
  it.each(['sr-valid-full', 'sr-valid-min', 'sr-invalid-uniqId', 'sr-invalid-sameAs'])(
    'Valid - sr-valid',
    (file: string) => {
      const testdata = provideTestData(file);
      expect(testdata.generator.version).toEqual(SwissRetsVersion.current);
    }
  );

  it('Valid - package.json version should match SwissRetsVersion.current', () => {
    const packagefile = fs
      .readFileSync(path.resolve(__dirname, `../../../package.json`))
      .toString();
    const testdata = JSON.parse(packagefile);
    expect(testdata.version.indexOf(SwissRetsVersion.current)).toEqual(0);
  });
});

const provideTestData = (file: string): SwissRetsInventory => {
  let sampleFile: string;
  switch (file) {
    case 'sr-valid-full':
      sampleFile = path.resolve(__dirname, `../../../examples/swissrets-full.json`);
      break;
    case 'sr-valid-min':
      sampleFile = path.resolve(__dirname, `../../../examples/swissrets-min.json`);
      break;
    case 'sr-invalid-uniqId':
      sampleFile = path.resolve(__dirname, `./resources/sr-invalid-uniqId.json`);
      break;
    case 'sr-invalid-sameAs':
      sampleFile = path.resolve(__dirname, `./resources/sr-invalid-sameAs.json`);
      break;
    default:
      throw new Error(`Invalid test data file: ${file}`);
  }
  const sample = fs.readFileSync(sampleFile).toString();
  return JSON.parse(sample) as SwissRetsInventory;
};
