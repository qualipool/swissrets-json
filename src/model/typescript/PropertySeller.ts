import { Organization } from "./Organization";
import { Person } from "./Person";


export interface PropertySeller {
  /**
   * Contact person for questions and typically responsible for making appointments. This
   * contact is typicaly presented publicly.
   */
  contactPerson?: Person;
  inquiryEmail?: string;
  /**
   * The company selling
   */
  organization?: Organization;
  /**
   * Person responsible opening the door for visiting.
   */
  visitPerson?: Person;
}
