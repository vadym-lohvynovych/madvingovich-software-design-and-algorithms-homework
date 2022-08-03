import { Shipper } from "./Shipper";

export class PacificParcelShipper extends Shipper {
  getCost(weight: number): number {
    return weight * 0.51;
  }

  getLetterCost(weight: number) {
    return this.getCost(weight);
  }

  getPackageCost(weight: number) {
    return weight * 0.19;
  }

  getOversizedCost(weight: number) {
    return this.getCost(weight) + weight * 0.02;
  }
}
