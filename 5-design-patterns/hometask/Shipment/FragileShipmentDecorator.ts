import { ShipmentDecorator } from "./ShipmentDecorator";

export class FragileShipmentDecorator extends ShipmentDecorator {
  ship(): string {
    return `${this.shipment.ship()}
    **MARK FRAGILE**`;
  }
}
