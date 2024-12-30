import { State } from "./State";

/**
 * Mutually exclusive lifecycle state.
 */

export interface PropertyAvailability {
  expiration?: string;
  start?: string;
  state: State;
}
