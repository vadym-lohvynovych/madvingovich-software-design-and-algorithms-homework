import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
    numberOfSlices: number;
    slicesEaten: number = 0;

    constructor(numberOfSlices: number, spoiled: boolean) {
        super("pizza", 10, 0.6, spoiled);
        this.numberOfSlices = numberOfSlices;
    }

    eat(): string {
        if (this.slicesEaten < this.numberOfSlices) {
            this.slicesEaten++;
            const result = super.use();
            if (this.slicesEaten >= this.numberOfSlices) {
                this.setConsumed(true);
            }
            return result;
        }
        return super.use();
    }
}
