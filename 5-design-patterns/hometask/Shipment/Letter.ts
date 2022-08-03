import { Shipment } from "./Shipment";

export class Letter extends Shipment {
  getCost(weight: number): number {
    return this.shipper.getLetterCost(weight);
  }
}
