import { Generator } from 'src/model/typescript/Generator';
import { Project } from 'src/model/typescript/Project';
import { Property } from 'src/model/typescript/Property';

/**
 * A product in the catalog
 */
export interface SwissRetsInventory {
  created?: string;
  generator: Generator;
  projects?: Project[];
  properties?: Property[];
}
