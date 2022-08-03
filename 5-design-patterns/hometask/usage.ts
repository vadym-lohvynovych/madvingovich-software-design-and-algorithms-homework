import { Client } from "./Client";
import { createShipment } from "./Shipment/ShipmentFactory";
import { getShipper } from "./utils/getShipper";

const client = new Client();

const weight = 17;
const fromAddress = "from address";
const toAddress = "to address";
const fromZipCode = 84100;
const toZipCode = 54100;

const shipment = createShipment(0, weight, fromAddress, fromZipCode, toAddress, toZipCode);

console.log(shipment);

client.handle(shipment);
