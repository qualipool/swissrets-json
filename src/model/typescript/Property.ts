import { Address } from "./Address";
import { Development } from "./Development";
import { ExternalReference } from "./ExternalReference";
import { Heating } from "./Heating";
import { PropertyLocalization } from "./PropertyLocalization";
import { MinergieCertification } from "./MinergieCertification";
import { PropertyPrices } from "./PropertyPrices";
import { Publisher } from "./Publisher";
import { PropertySeller } from "./PropertySeller";
import { PropertyType } from "./PropertyType";
import { Utilization } from "./Utilization";
import { PropertyCharacteristics } from "./PropertyCharacteristics";
import { Category } from "./Category";
import { Bfs } from "./Bfs";
import { PropertyAvailability } from "./PropertyAvailability";


export interface Property {
  /**
   * Location of the property.
   */
  address?: Address;
  /**
   * The name or username of the author, who created the record.
   */
  author?: string;
  /**
   * Mutually exclusive lifecycle state.
   */
  availability: PropertyAvailability;
  /**
   * Federal statistical office specific information
   */
  bfs?: Bfs;
  /**
   * Building zones intended for residential buildings or for other buildings intended as
   * long-stay accommodation, those are typically municipal-specific abbreviations.
   */
  buildingZones?: string;
  /**
   * Sequence of ordered categories (main first).
   */
  categories?: Category[];
  /**
   * Main characteristics of properties
   */
  characteristics?: PropertyCharacteristics;
  /**
   * Creation date and time of the data.
   */
  created?: string;
  /**
   * The development state of the property.
   */
  development?: Development;
  /**
   * Object references based on other than SwissRETS standard (e.g IDX).
   */
  externalReference?: ExternalReference;
  /**
   * The main heating system.
   */
  heating?: Heating;
  /**
   * This ID needs to be unique and represents the id from the exporter (this can be the same
   * as referenceId if the exporter is the original creator)
   */
  id: string;
  /**
   * Sequence of all language specific content and texts.
   */
  localizations: PropertyLocalization[];
  /**
   * Quality label for new and refurbished low-energy-consumption buildings.
   */
  minergieCertification?: MinergieCertification;
  /**
   * Date and time of the last modification. This field should only be used for presentational
   * purposes and should not be relied upon for import cache-busting.
   */
  modified?: string;
  /**
   * Arbitrary string that holds one or more parcel numbers, either from the swiss cadastral
   * system or from a certain municipality.
   */
  parcelNumbers?: string;
  prices?: PropertyPrices;
  /**
   * List of publishers
   */
  publishers?: Publisher[];
  /**
   * Can be used to track the original creation id (this should usually be unique to the
   * property)
   */
  referenceId: string;
  seller?: PropertySeller;
  /**
   * Specifies rent or buy.
   */
  type: PropertyType;
  /**
   * Reference to an existing project - unit within the xml. Used for grouping and
   * representing a 'project-tree'
   */
  unitReferenceId?: string;
  /**
   * Prioritized sequence for the intended utilization of the property, main comes first.
   */
  utilizations?: Utilization[];
  /**
   * Can should only be used for presentational purposes publishers tend to present the
   * referenceId if this one is missing
   */
  visualReferenceId?: string;
}
