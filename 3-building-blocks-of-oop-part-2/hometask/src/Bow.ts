import { Weapon } from "./Weapon";

const NAME = "bow";

export class Bow extends Weapon {
    public name: string = NAME;

    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(NAME, baseDamage, baseDurability, value, weight);
    }

    public polish(): void {
        const nextDurabilityModifier = this.durabilityModifier + this.MODIFIER_CHANGE_RATE;
        if (nextDurabilityModifier > 1) {
            this.durabilityModifier = 1;
        } else {
            this.durabilityModifier = nextDurabilityModifier;
        }
    }
}
