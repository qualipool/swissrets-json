import { ProjectAttachment } from "./ProjectAttachment";

/**
 * One for each language, a set of language specific content and texts.
 */

export interface ProjectLocalization {
  /**
   * Sequence links, files, embeds and media.
   */
  attachments?: ProjectAttachment;
  /**
   * Main description.
   */
  description?: string;
  /**
   * A short extract from description, location and equipment.
   */
  excerpt?: string;
  languageCode: string;
  /**
   * Simple marketing title.
   */
  title: string;
}
