import { Shipper } from "./Shipper";

export class PacificParcelShipper extends Shipper {
  getCost(weight: number) {
    return weight * 0.39;
  }
}
