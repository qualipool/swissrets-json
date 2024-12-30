import { Logo } from "./Logo";
import { Image } from "./Image";
import { Document } from "./Document";
import { Link } from "./Link";

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
