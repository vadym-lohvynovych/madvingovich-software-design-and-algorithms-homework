import { Shipment } from "./Shipment";

export class Package extends Shipment {
  getCost(weight: number): number {
    return this.shipper.getPackageCost(weight);
  }
}
