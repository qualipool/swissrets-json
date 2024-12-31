import { Referring } from 'src/model/typescript/Referring';

/**
 * One time buy prices.
 */

export interface PropertyPriceBuy {
  /**
   * Extra buying price.
   */
  extra?: number;
  /**
   * Price for buying.
   */
  price?: number;
  referring?: Referring;
  /**
   * The percentage of the gross price which has to paid in WIR Franc electronic currency.
   */
  wirPercentage?: number;
}
