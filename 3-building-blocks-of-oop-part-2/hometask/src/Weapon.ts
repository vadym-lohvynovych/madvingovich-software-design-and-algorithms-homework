import { Item } from "./Item";

export abstract class Weapon extends Item {
    protected MODIFIER_CHANGE_RATE: number = 0.05;

    protected baseDamage: number;
    protected damageModifier: number = 0;
    protected baseDurability: number;
    protected durabilityModifier: number = 0;

    constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(name, value, weight);
        this.baseDamage = baseDamage;
        this.baseDurability = baseDurability;
    }

    protected isBroken(): boolean {
        return this.getDurability() <= 0;
    }

    public getDamage(): number {
        return this.baseDamage + this.damageModifier;
    }

    public getDurability(): number {
        return this.baseDurability + this.durabilityModifier;
    }

    public use(): string {
        if (this.isBroken()) {
            return `You can't use the ${this.name}, it is broken.`;
        } else {
            this.baseDurability -= this.MODIFIER_CHANGE_RATE;
            const baseResult = `You use ${this.name}, dealing ${this.getDamage()} points of damage.`;

            return this.isBroken() ? `${baseResult} The ${this.name} breaks.` : baseResult;
        }
    }

    public toString(): string {
        return `${super.toString()}, Damage: ${this.getDamage()}, Durability: ${this.getDurability()}`;
    }
}
