import { Shipper } from "../Shipper/Shipper";
import { getUniqueId } from "../utils/uniqueIdService";

export interface IShipment {
  shipmentId: number;
  weight: number;
  fromAddress: string;
  fromZipCode: number;
  toAddress: string;
  toZipCode: number;
  shipper: Shipper;
  ship(): string;
  getCost(weight: number): number;
  getShipmentId(shipmentId: number): number;
}

export abstract class Shipment implements IShipment {
  shipmentId: number;
  weight: number;
  fromAddress: string;
  fromZipCode: number;
  toAddress: string;
  toZipCode: number;
  shipper: Shipper;

  abstract getCost(weight: number): number;

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
    return `Shipment with the ID ${this.shipmentId} will be picked up from ${this.fromZipCode} ${
      this.fromAddress
    } and shipped to ${this.toZipCode} ${this.toAddress}, Cost = ${this.getCost(this.weight)}`;
  }

  getShipmentId(shipmentId: number): number {
    return shipmentId === 0 ? getUniqueId() : shipmentId;
  }
}
