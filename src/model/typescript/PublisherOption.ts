/**
 * Custom key-value pair, or generic data field, used for non-standardized data transaction,
 * between two entities.
 */

export interface PublisherOption {
  expiration?: string;
  key: string;
  languageCode?: string;
  start?: string;
  value: string;
}
