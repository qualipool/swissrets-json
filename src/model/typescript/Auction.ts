/**
 * Starting price for an auction.
 */

export interface Auction {
  /**
   * Expiration time of auction.
   */
  expiration: string;
  /**
   * Starting time of auction.
   */
  startDate: string;
  /**
   * Starting price for an auction.
   */
  startPrice: number;
}
