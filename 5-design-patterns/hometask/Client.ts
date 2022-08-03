import { Shipment } from "./Shipment/Shipment";

export class Client {
  handle(shipment: Shipment) {
    const result = shipment.ship();
    console.log(result);
  }
}
