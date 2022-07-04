import { Point } from "./Point";

export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    protected points: Point[];

    abstract getType(): string;

    constructor(points: Point[]);
    constructor(points: Point[], color?: string, filled?: boolean);
    constructor(
        points: Point[],
        color: string = "green",
        filled: boolean = true
    ) {
        if (points.length < 3) {
            throw new Error("Figure shoud have at least 3 points.");
        }

        this.points = points;
        this.color = color;
        this.filled = filled;
    }

    getPerimeter(): number {
        return this.points.reduce((acc, point, index) => {
            const nextPointIndex = this.points[index + 1] ? index + 1 : 0;
            return acc + point.distance(this.points[nextPointIndex]);
        }, 0);
    }

    toString() {
        const filledText = this.filled ? "filled" : "not filled";
        const pointsText = this.points.map((p) => p.toString()).join(", ");

        return `A Shape with color of ${this.color} and ${filledText}. Points: ${pointsText}.`;
    }
}
