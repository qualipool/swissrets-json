import { ProjectPriceBuy } from 'src/model/typescript/ProjectPriceBuy';
import { ProjectPriceRent } from 'src/model/typescript/ProjectPriceRent';

/**
 * Price ranges for marketing purposes.
 */

export interface ProjectPrices {
  /**
   * One time buy prices.
   */
  buy?: ProjectPriceBuy;
  currency: string;
  /**
   * Recurring rental price.
   */
  rent?: ProjectPriceRent;
}
