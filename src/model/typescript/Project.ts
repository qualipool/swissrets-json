import { Unit } from "./Unit";
import { ProjectSeller } from "./ProjectSeller";
import { ProjectPrices } from "./ProjectPrices";
import { ProjectLocalization } from "./ProjectLocalization";
import { ConstructionStatus } from "./ConstructionStatus";
import { ProjectCharacteristics } from "./ProjectCharacteristics";
import { ProjectAvailability } from "./ProjectAvailability";
import { Address } from "./Address";

/**
 * Building project container.
 */
export interface Project {
  /**
   * Location of the property.
   */
  address?: Address;
  /**
   * Mutually exclusive lifecycle state.
   */
  availability: ProjectAvailability;
  /**
   * Characteristics and ranges relevant to entire project.
   */
  characteristics?: ProjectCharacteristics;
  /**
   * Construction status of project.
   */
  constructionStatus?: ConstructionStatus;
  id?: string;
  /**
   * Sequence of all language specific content and texts.
   */
  localizations?: ProjectLocalization[];
  /**
   * Price ranges for marketing purposes.
   */
  prices?: ProjectPrices;
  referenceId: string;
  /**
   * The owner or the owners substitute (for example a broker).
   */
  seller?: ProjectSeller;
  /**
   * List of units.
   */
  units: Unit[];
}
