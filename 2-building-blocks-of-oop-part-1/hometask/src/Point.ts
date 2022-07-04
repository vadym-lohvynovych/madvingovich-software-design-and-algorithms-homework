export class Point {
    public x: number;
    public y: number;

    constructor();
    constructor(x?: number, y?: number) {
        this.x = x ?? 0;
        this.y = y ?? 0;
    }

    private getDistanceTo(x2: number, y2: number): number {
        return Math.sqrt(Math.pow(x2 - this.x, 2) + Math.pow(y2 - this.y, 2));
    }

    distance(): number;
    distance(x?: Point): number;
    distance(x?: Point | number, y?: number): number {
        if (typeof x === "number" && typeof y === "number") {
            return this.getDistanceTo(x, y);
        } else if (x instanceof Point) {
            return this.getDistanceTo(x.x, x.y);
        } else {
            return this.getDistanceTo(0, 0);
        }
    }

    toString() {
        return `(${this.x}, ${this.y})`;
    }
}
