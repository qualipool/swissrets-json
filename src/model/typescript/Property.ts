import { Address } from 'src/model/typescript/Address';
import { Bfs } from 'src/model/typescript/Bfs';
import { Category } from 'src/model/typescript/Category';
import { Development } from 'src/model/typescript/Development';
import { ExternalReference } from 'src/model/typescript/ExternalReference';
import { Heating } from 'src/model/typescript/Heating';
import { MinergieCertification } from 'src/model/typescript/MinergieCertification';
import { PropertyAvailability } from 'src/model/typescript/PropertyAvailability';
import { PropertyCharacteristics } from 'src/model/typescript/PropertyCharacteristics';
import { PropertyLocalization } from 'src/model/typescript/PropertyLocalization';
import { PropertyPrices } from 'src/model/typescript/PropertyPrices';
import { PropertySeller } from 'src/model/typescript/PropertySeller';
import { PropertyType } from 'src/model/typescript/PropertyType';
import { Publisher } from 'src/model/typescript/Publisher';
import { Utilization } from 'src/model/typescript/Utilization';

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
