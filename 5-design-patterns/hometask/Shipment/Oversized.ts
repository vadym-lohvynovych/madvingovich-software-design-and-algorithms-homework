import { Shipment } from "./Shipment";

export class Oversized extends Shipment {
  getCost(weight: number): number {
    return this.shipper.getOversizedCost(weight);
  }
}
