import { State } from 'src/model/typescript/State';

/**
 * Mutually exclusive lifecycle state.
 */

export interface ProjectAvailability {
  expiration?: string;
  start?: string;
  state: State;
}
