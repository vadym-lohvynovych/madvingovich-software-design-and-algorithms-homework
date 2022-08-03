import { Shipper } from "./Shipper";

export class ChicagoSprintShipper extends Shipper {
  getCost(weight: number) {
    return weight * 0.42;
  }
}
