import { PublisherOption } from 'src/model/typescript/PublisherOption';
import { PublisherPromotion } from 'src/model/typescript/PublisherPromotion';

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
