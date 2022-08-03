import { getShipmentClass, getShipmentType } from "../utils/getShipmentType";
import { getShipper } from "../utils/getShipper";

export const createShipment = (
  shipmentId: number,
  weight: number,
  fromAddress: string,
  fromZipCode: number,
  toAddress: string,
  toZipCode: number
) => {
  const shipper = getShipper(fromZipCode);
  const ShipmentClass = getShipmentClass(getShipmentType(weight));

  return new ShipmentClass(shipmentId, weight, fromAddress, fromZipCode, toAddress, toZipCode, shipper);
};
