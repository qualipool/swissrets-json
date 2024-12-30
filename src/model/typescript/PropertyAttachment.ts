import { Document } from "./Document";
import { Image } from "./Image";
import { Link } from "./Link";
import { Logo } from "./Logo";

/**
 * Sequence links, files, embeds and media.
 */

export interface PropertyAttachment {
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
