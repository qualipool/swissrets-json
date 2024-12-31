import { HeatingDistribution } from 'src/model/typescript/HeatingDistribution';
import { HeatingGeneration } from 'src/model/typescript/HeatingGeneration';

/**
 * The main heating system.
 */

export interface Heating {
  /**
   * How the heating system distributes and maintains temperature.
   */
  distribution?: HeatingDistribution;
  /**
   * Technology used to create heat.
   */
  generation?: HeatingGeneration;
}
