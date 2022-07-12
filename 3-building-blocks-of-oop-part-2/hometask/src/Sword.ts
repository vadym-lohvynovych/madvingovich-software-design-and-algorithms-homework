import { Weapon } from "./Weapon";

const NAME = "sword";

export class Sword extends Weapon {
    public name: string = NAME;

    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(NAME, baseDamage, baseDurability, value, weight);
    }

    public polish(): void {
        const nextDamageModifier = this.damageModifier + this.MODIFIER_CHANGE_RATE;
        const maxDamageModifier = this.baseDamage * 1.25;
        if (nextDamageModifier > maxDamageModifier) {
            this.damageModifier = maxDamageModifier;
        } else {
            this.damageModifier = nextDamageModifier;
        }
    }
}
