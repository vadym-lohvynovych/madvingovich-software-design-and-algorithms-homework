export abstract class Shipper {
  abstract getCost(weight: number): number;

  abstract getLetterCost(weight: number): number;
  abstract getPackageCost(weight: number): number;
  abstract getOversizedCost(weight: number): number;
}
