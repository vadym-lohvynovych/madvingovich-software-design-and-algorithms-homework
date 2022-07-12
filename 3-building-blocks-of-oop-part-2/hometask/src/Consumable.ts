import { Item } from "./Item";

export class Consumable extends Item {
    protected consumed: boolean = false;
    protected spoiled: boolean;

    constructor(name: string, value: number, weight: number, spoiled: boolean) {
        super(name, value, weight);
        this.spoiled = spoiled;
    }

    use(): string {
        if (this.consumed) {
            return `There is nothing left of the ${this.name} to consume.`;
        } else if (this.spoiled) {
            return `${this.eat()}.\nYou feel sick.`;
        } else {
            return this.eat();
        }
    }

    eat(): string {
        return `You eat the ${this.name}.`;
    }

    public isConsumed(): boolean {
        return this.consumed;
    }

    public setConsumed(consumed: boolean): void {
        this.consumed = consumed;
    }

    public isSpoiled(): boolean {
        return this.spoiled;
    }
}
