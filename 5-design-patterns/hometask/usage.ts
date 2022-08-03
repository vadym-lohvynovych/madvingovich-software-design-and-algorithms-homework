import { Client } from "./Client";
import { Shipment } from "./Shipment";
import { getShipper } from "./utils/getShipper";

const client = new Client();

const weight = 14;
const fromAddress = "from address";
const toAddress = "to address";
const fromZipCode = 34100;
const toZipCode = 54100;

const shiper = getShipper(fromZipCode);

const shipment = new Shipment(0, weight, fromAddress, fromZipCode, toAddress, toZipCode, shiper);

client.handle(shipment);
