import { AirEastShipper } from "../Shipper/AirEastShipper";
import { ChicagoSprintShipper } from "../Shipper/ChicagoSprintShipper";
import { PacificParcelShipper } from "../Shipper/PacificParcelShipper";
import { Shipper } from "../Shipper/Shipper";

const airEastShipper = new AirEastShipper();
const chicagoSprintShipper = new ChicagoSprintShipper();
const pacificParcelShipper = new PacificParcelShipper();

export const getShipper = (zipCode: number) => {
  const firstZipCodeNumber = String(zipCode)[0];
  let shipper: Shipper = airEastShipper;

  switch (firstZipCodeNumber) {
    case "4":
    case "5":
    case "6":
      shipper = chicagoSprintShipper;
      break;
    case "7":
    case "8":
    case "9":
      shipper = pacificParcelShipper;
      break;
  }

  return shipper;
};
