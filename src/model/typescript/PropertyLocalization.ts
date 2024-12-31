import { Event } from 'src/model/typescript/Event';
import { PropertyAttachment } from 'src/model/typescript/PropertyAttachment';

/**
 * One for each language, a set of language specific content and texts.
 */

export interface PropertyLocalization {
  /**
   * Sequence links, files, embeds and media.
   */
  attachments?: PropertyAttachment;
  /**
   * Main description.
   */
  description?: string;
  /**
   * Description of available and included equipment.
   */
  equipment?: string;
  /**
   * List of events
   */
  events?: Event[];
  /**
   * A short extract from description, location and equipment.
   */
  excerpt?: string;
  languageCode: string;
  /**
   * Description of the surrounding and location.
   */
  location?: string;
  /**
   * Simple marketing title.
   */
  title: string;
  /**
   * Specific visiting instructions or information, where to get the key, when to contact and
   * similar.
   */
  visitInformation?: string;
}
