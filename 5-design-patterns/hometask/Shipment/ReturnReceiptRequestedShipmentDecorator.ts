import { ShipmentDecorator } from "./ShipmentDecorator";

export class ReturnReceiptRequestedShipmentDecorator extends ShipmentDecorator {
  ship(): string {
    return `${this.shipment.ship()}
    **MARK RETURN RECEIPT REQUESTED**`;
  }
}
