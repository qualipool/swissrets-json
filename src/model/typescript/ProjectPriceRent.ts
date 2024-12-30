import { Interval } from "./Interval";
import { Referring } from "./Referring";

/**
 * Recurring rental price.
 */

export interface ProjectPriceRent {
  interval?: Interval;
  netFrom: number;
  netTo: number;
  referring?: Referring;
}
