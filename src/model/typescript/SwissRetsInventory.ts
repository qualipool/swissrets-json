import { Property } from "./Property";
import { Project } from "./Project";
import { Generator } from "./Generator";

/**
 * A product in the catalog
 */
export interface SwissRetsInventory {
  created?: string;
  generator: Generator;
  projects?: Project[];
  properties?: Property[];
}
