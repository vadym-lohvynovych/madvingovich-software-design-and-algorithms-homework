import { Shipper } from "./Shipper";

export class ChicagoSprintShipper extends Shipper {
  getCost(weight: number): number {
    return weight * 0.42;
  }

  getLetterCost(weight: number) {
    return this.getCost(weight);
  }

  getPackageCost(weight: number) {
    return (weight * 2) / 10;
  }

  getOversizedCost() {
    return 0;
  }
}
