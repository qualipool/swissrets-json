import validListing from 'examples/swissrets-full.json';
import _ from 'lodash';
import { SwissRetsInventory } from 'src/ts/model/swissrets-model';

const FIXTURES = {
  SR_FULL: _.cloneDeep(validListing) as SwissRetsInventory
};

export const stubSrFull = (): SwissRetsInventory => {
  return _.cloneDeep(FIXTURES.SR_FULL) as SwissRetsInventory;
};

export const stubSrFullModified = (
  path: string,
  updater: (value: unknown) => unknown
): SwissRetsInventory => {
  const clone = _.cloneDeep(stubSrFull()) as SwissRetsInventory;
  _.update(clone, path, updater);
  return clone;
};
