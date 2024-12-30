import { PublisherOption } from "./PublisherOption";
import { PublisherPromotion } from "./PublisherPromotion";


export interface Publisher {
  id: string;
  /**
   * List of publisher specific custom fields
   */
  options?: PublisherOption[];
  /**
   * List of promotions
   */
  promotions?: PublisherPromotion[];
}
