import { Organization } from "./Organization";
import { Person } from "./Person";

/**
 * The owner or the owners substitute (for example a broker).
 */

export interface ProjectSeller {
  /**
   * Contact person for questions and typically responsible for making appointments. This
   * contact is typicaly presented publicly.
   */
  contactPerson?: Person;
  /**
   * The person responsible for receiving inquiries and applications. This person should not
   * be presented publicly and is only intended as an indirect recipient using an online form
   * or similar.
   */
  inquiryPerson?: Person;
  /**
   * The company selling
   */
  organization?: Organization;
}
