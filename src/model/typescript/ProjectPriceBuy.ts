import { Referring } from 'src/model/typescript/Referring';

/**
 * One time buy prices.
 */

export interface ProjectPriceBuy {
  priceFrom: number;
  priceTo: number;
  referring: Referring;
}
