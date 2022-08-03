import { Letter } from "../Shipment/Letter";
import { Oversized } from "../Shipment/Oversized";
import { Package } from "../Shipment/Package";
import { Shipment } from "../Shipment/Shipment";

const LETTER = "letter";
const PACKAGE = "package";
const OVERSIZED = "oversized";

export const getShipmentType = (weight: number) => {
  if (weight <= 15) {
    return LETTER;
  } else if (weight <= 160) {
    return PACKAGE;
  } else {
    return OVERSIZED;
  }
};

export const shipmentTypeToClassMapping = {
  [LETTER]: Letter,
  [PACKAGE]: Package,
  [OVERSIZED]: Oversized,
};

export const getShipmentClass = (shipmentType: string) => {
  return shipmentTypeToClassMapping[shipmentType];
};
