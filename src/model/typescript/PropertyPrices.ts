import { Auction } from 'src/model/typescript/Auction';
import { Deposit } from 'src/model/typescript/Deposit';
import { JsonSchemaSwissRetsJson } from 'src/model/typescript/JsonSchemaSwissRetsJson';
import { PropertyPriceBuy } from 'src/model/typescript/PropertyPriceBuy';
import { PropertyPriceRent } from 'src/model/typescript/PropertyPriceRent';

/**
 * Sell, rent, deposit and auction prices.
 */

export interface PropertyPrices {
  /**
   * List of extras.
   */
  additionalOffers?: JsonSchemaSwissRetsJson[];
  /**
   * Starting price for an auction.
   */
  auction?: Auction;
  /**
   * One time buy prices.
   */
  buy?: PropertyPriceBuy;
  currency?: string;
  /**
   * Required amount of deposit.
   */
  deposit?: Deposit;
  /**
   * Recurring rental price.
   */
  rent?: PropertyPriceRent;
}
