import { DoNotLeaveShipmentDecorator } from "./Shipment/DoNotLeaveShipmentDecorator";
import { FragileShipmentDecorator } from "./Shipment/FragileShipmentDecorator";
import { ReturnReceiptRequestedShipmentDecorator } from "./Shipment/ReturnReceiptRequestedShipmentDecorator";
import { IShipment } from "./Shipment/Shipment";

export class Client {
  handle(shipment: IShipment) {
    const result = shipment.ship();
    console.log(result);
  }

  makeShipmentFragile(shipment: IShipment): IShipment {
    return new FragileShipmentDecorator(shipment);
  }

  makeShipmentDoNotLeave(shipment: IShipment): IShipment {
    return new DoNotLeaveShipmentDecorator(shipment);
  }

  makeShipmentReturnReceiptRequested(shipment: IShipment): IShipment {
    return new ReturnReceiptRequestedShipmentDecorator(shipment);
  }
}
