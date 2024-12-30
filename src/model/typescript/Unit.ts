import { UnitLocalization } from "./UnitLocalization";
import { UnitCharacteristic } from "./UnitCharacteristic";

/**
 * A set of properties
 */

export interface Unit {
  characteristics?: UnitCharacteristic[];
  id?: string;
  /**
   * Sequence of all language specific content and texts.
   */
  localizations: UnitLocalization[];
  referenceId: string;
}
