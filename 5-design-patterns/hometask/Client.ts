import { Shipment } from "./Shipment";

export class Client {
  handle(shipment: Shipment) {
    const result = shipment.ship();
    console.log(result);
  }
}
