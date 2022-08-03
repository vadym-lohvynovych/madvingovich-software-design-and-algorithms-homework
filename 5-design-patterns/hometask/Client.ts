import { IShipment } from "./Shipment/Shipment";

export class Client {
  handle(shipment: IShipment) {
    const result = shipment.ship();
    console.log(result);
  }
}
