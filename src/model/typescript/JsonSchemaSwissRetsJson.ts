import { AdditionalOfferType } from 'src/model/typescript/AdditionalOfferType';
import { Interval } from 'src/model/typescript/Interval';

export interface JsonSchemaSwissRetsJson {
  interval?: Interval;
  price: number;
  type: AdditionalOfferType;
}
