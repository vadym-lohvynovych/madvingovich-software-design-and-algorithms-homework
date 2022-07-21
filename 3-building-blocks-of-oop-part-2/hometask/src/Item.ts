import { Comparable } from "./Comparable";

let id = 0;
let count = 0;

export abstract class Item implements Comparable<Item> {
    protected id: number;
    protected name: string;
    protected value: number;
    protected weight: number;

    static get numberOfItems(): number {
        return count;
    }

    static reset(): void {
        count = 0;
    }

    constructor(name: string, value: number, weight: number) {
        this.id = id++;
        this.name = name;
        this.value = value;
        this.weight = weight;
        count++;
    }

    public use(): void {}

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getValue(): number {
        return this.value;
    }

    public getWeight(): number {
        return this.weight;
    }

    public setValue(price: number): void {
        this.value = price;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setWeight(weight: number): void {
        this.weight = weight;
    }

    public compareTo(other: Item): number {
        if (this.value === other.value) {
            return this.name.toLowerCase() < other.name.toLowerCase() ? 1 : -1;
        } else {
            return this.value > other.value ? 1 : -1;
        }
    }

    public toString(): string {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
    }
}
