import { State } from 'src/model/typescript/State';

/**
 * Mutually exclusive lifecycle state.
 */

export interface PropertyAvailability {
  expiration?: string;
  start?: string;
  state: State;
}
