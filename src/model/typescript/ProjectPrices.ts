import { ProjectPriceRent } from "./ProjectPriceRent";
import { ProjectPriceBuy } from "./ProjectPriceBuy";

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
