import { IShipment, Shipment } from "./Shipment";

export class ShipmentDecorator implements IShipment {
  shipment: Shipment;

  constructor(shipment: Shipment) {
    this.shipment = shipment;
  }

  ship(): string {
    return this.shipment.ship();
  }
  getCost(weight: number): number {
    return this.shipment.getCost(weight);
  }
  getShipmentId(shipmentId: number): number {
    return this.shipment.getShipmentId(shipmentId);
  }

  get shipmentId() {
    return this.shipment.shipmentId;
  }
  get weight() {
    return this.shipment.weight;
  }
  get fromAddress() {
    return this.shipment.fromAddress;
  }
  get fromZipCode() {
    return this.shipment.fromZipCode;
  }
  get toAddress() {
    return this.shipment.toAddress;
  }
  get toZipCode() {
    return this.shipment.toZipCode;
  }
  get shipper() {
    return this.shipment.shipper;
  }
}
