import { Interval } from 'src/model/typescript/Interval';
import { Referring } from 'src/model/typescript/Referring';

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
