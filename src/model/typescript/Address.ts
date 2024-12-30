import { Geo } from "./Geo";

/**
 * Location of the property.
 *
 * Postal address.
 */
export interface Address {
  /**
   * Uppercase two letter country code.
   */
  countryCode?: string;
  /**
   * Geo coordinates and elevation
   */
  geo?: Geo;
  locality?: string;
  postalCode?: string;
  postOfficeBoxNumber?: string;
  region?: string;
  street?: string;
  streetAddition?: string;
  streetNumber?: string;
  subunit?: number;
}
