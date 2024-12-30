/**
 * 'direct-link' defines a link that will link visitors 'directly' to the offer. For example
 * from a List of properties one will be linked to the project website directly if clicked.
 * This is usually used by websites, and portals tend to ignore that and can opt into simply
 * representing them as normal 'link' types.
 *
 * Localized link attachment for properties.
 *
 * An arbitrary related link.
 *
 * Virtual tour link, typically used for embeddings and integrations.
 *
 * Video link, typically used for embeddings and integrations.
 */

export interface Link {
  title?: string;
  url: string;
}
