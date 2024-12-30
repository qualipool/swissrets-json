import { Auction } from "./Auction";
import { Deposit } from "./Deposit";
import { JsonSchemaSwissRetsJson } from "./JsonSchemaSwissRetsJson";
import { PropertyPriceBuy } from "./PropertyPriceBuy";
import { PropertyPriceRent } from "./PropertyPriceRent";

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
