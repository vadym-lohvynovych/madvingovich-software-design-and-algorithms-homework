import { ShipmentDecorator } from "./ShipmentDecorator";

export class DoNotLeaveShipmentDecorator extends ShipmentDecorator {
  ship(): string {
    return `${this.shipment.ship()}
    **MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**`;
  }
}
