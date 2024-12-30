import { Interval } from "./Interval";
import { Referring } from "./Referring";

/**
 * Recurring rental price.
 */

export interface PropertyPriceRent {
  /**
   * Extra rental price.
   */
  extra?: number;
  /**
   * Gross rental price.
   */
  gross?: number;
  interval?: Interval;
  /**
   * Net rental price.
   */
  net?: number;
  referring?: Referring;
}
