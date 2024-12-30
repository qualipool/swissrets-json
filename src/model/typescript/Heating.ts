import { HeatingDistribution } from "./HeatingDistribution";
import { HeatingGeneration } from "./HeatingGeneration";

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
