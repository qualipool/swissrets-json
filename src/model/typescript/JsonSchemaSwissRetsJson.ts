import { AdditionalOfferType } from "./AdditionalOfferType";
import { Interval } from "./Interval";


export interface JsonSchemaSwissRetsJson {
  interval?: Interval;
  price: number;
  type: AdditionalOfferType;
}
