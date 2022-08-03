import { Shipper } from "./Shipper";

export class AirEastShipper extends Shipper {
  getCost(weight: number) {
    return weight * 0.39;
  }
}
