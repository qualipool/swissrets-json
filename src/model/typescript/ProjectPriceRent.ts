import { Interval } from 'src/model/typescript/Interval';
import { Referring } from 'src/model/typescript/Referring';

/**
 * Recurring rental price.
 */

export interface ProjectPriceRent {
  interval?: Interval;
  netFrom: number;
  netTo: number;
  referring?: Referring;
}
