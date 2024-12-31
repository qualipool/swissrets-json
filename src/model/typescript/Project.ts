import { Address } from 'src/model/typescript/Address';
import { ConstructionStatus } from 'src/model/typescript/ConstructionStatus';
import { ProjectAvailability } from 'src/model/typescript/ProjectAvailability';
import { ProjectCharacteristics } from 'src/model/typescript/ProjectCharacteristics';
import { ProjectLocalization } from 'src/model/typescript/ProjectLocalization';
import { ProjectPrices } from 'src/model/typescript/ProjectPrices';
import { ProjectSeller } from 'src/model/typescript/ProjectSeller';
import { Unit } from 'src/model/typescript/Unit';

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
