import { UnitCharacteristic } from 'src/model/typescript/UnitCharacteristic';
import { UnitLocalization } from 'src/model/typescript/UnitLocalization';

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
