import { Shipper } from "./Shipper/Shipper";
import { getUniqueId } from "./utils/uniqueIdService";

export class Shipment {
  shipmentId: number;
  weight: number;
  fromAddress: string;
  fromZipCode: number;
  toAddress: string;
  toZipCode: number;
  shipper: Shipper;

  constructor(
    shipmentId: number,
    weight: number,
    fromAddress: string,
    fromZipCode: number,
    toAddress: string,
    toZipCode: number,
    shipper: Shipper
  ) {
    this.shipmentId = this.getShipmentId(shipmentId);
    this.weight = weight;
    this.fromAddress = fromAddress;
    this.fromZipCode = fromZipCode;
    this.toAddress = toAddress;
    this.toZipCode = toZipCode;
    this.shipper = shipper;
  }

  ship(): string {
    return `${this.shipmentId}. From: ${this.fromAddress}. To: ${this.toAddress}. Cost: ${this.getCost()}$.`;
  }

  getShipmentId(shipmentId: number): number {
    return shipmentId === 0 ? getUniqueId() : shipmentId;
  }

  getCost(): number {
    return this.shipper.getCost(this.weight);
  }
}
