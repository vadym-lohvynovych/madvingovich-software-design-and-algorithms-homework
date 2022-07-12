import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory {
    protected items: Item[] = [];

    public addItem(item: Item): void {
        this.items.push(item);
    }

    public sort(): void;
    public sort(comparator: ItemComparator): void;
    public sort(comparator?: ItemComparator) {
        const sorter = comparator
            ? (a: Item, b: Item) => comparator.compare(a, b)
            : (a: Item, b: Item) => a.compareTo(b);

        this.items.sort(sorter);
    }

    public toString(): string {
        return this.items.join(", ");
    }
}
