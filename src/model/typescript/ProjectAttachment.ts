import { Document } from 'src/model/typescript/Document';
import { Image } from 'src/model/typescript/Image';
import { Link } from 'src/model/typescript/Link';
import { Logo } from 'src/model/typescript/Logo';

/**
 * Sequence links, files, embeds and media.
 */

export interface ProjectAttachment {
  directLinks?: Link[];
  documents?: Document[];
  images?: Image[];
  landRegisterExtracts?: Document[];
  links?: Link[];
  logos?: Logo[];
  plans?: Document[];
  virtualTourLinks?: Link[];
  youTubeLinks?: Link[];
}
