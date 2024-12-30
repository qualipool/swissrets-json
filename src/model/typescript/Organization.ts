import { Address } from "./Address";
import { Website } from "./Website";

/**
 * The company selling
 *
 * An organization selling the property.
 */

export interface Organization {
  address?: Address;
  brand?: string;
  email?: string;
  /**
   * This field is depricated and will be removed in a future major version!
   */
  emailRem?: string;
  id?: string;
  legalName?: string;
  mobile?: string;
  phone?: string;
  website?: Website;
}