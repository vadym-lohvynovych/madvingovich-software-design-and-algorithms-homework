import { Client } from "./Client";
import { DoNotLeaveShipmentDecorator } from "./Shipment/DoNotLeaveShipmentDecorator";
import { FragileShipmentDecorator } from "./Shipment/FragileShipmentDecorator";
import { ReturnReceiptRequestedShipmentDecorator } from "./Shipment/ReturnReceiptRequestedShipmentDecorator";
import { createShipment } from "./Shipment/ShipmentFactory";

const client = new Client();

const weight = 17;
const fromAddress = "from address";
const toAddress = "to address";
const fromZipCode = 84100;
const toZipCode = 54100;

const shipment = createShipment(0, weight, fromAddress, fromZipCode, toAddress, toZipCode);

const fragileShipment = client.makeShipmentFragile(shipment);

const doNotLeaveFragileShipment = client.makeShipmentDoNotLeave(fragileShipment);

const returnReceiptRequestedDoNotLeaveFragileShipment =
  client.makeShipmentReturnReceiptRequested(doNotLeaveFragileShipment);

client.handle(returnReceiptRequestedDoNotLeaveFragileShipment);
