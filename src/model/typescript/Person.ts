/**
 * Contact person for questions and typically responsible for making appointments. This
 * contact is typicaly presented publicly.
 *
 * An organization selling the property.
 *
 * The person responsible for receiving inquiries and applications. This person should not
 * be presented publicly and is only intended as an indirect recipient using an online form
 * or similar.
 *
 * Person responsible opening the door for visiting.
 */

export interface Person {
  email?: string;
  familyName?: string;
  function?: string;
  gender?: string;
  givenName?: string;
  mobile?: string;
  note?: string;
  phone?: string;
}
