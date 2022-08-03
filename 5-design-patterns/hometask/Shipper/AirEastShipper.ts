import { Shipper } from "./Shipper";

export class AirEastShipper extends Shipper {
  getCost(weight: number): number {
    return weight * 0.39;
  }

  getLetterCost(weight: number) {
    return this.getCost(weight);
  }

  getPackageCost(weight: number) {
    return weight * 0.25;
  }

  getOversizedCost(weight: number) {
    return this.getCost(weight) + 10;
  }
}
