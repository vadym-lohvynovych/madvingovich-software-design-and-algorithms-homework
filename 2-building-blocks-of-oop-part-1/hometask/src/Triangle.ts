import { Point } from "./Point";
import { Shape } from "./Shape";
import { unique } from "./utils/unique";
import { getNextItemIndex } from "./utils/getNextItemIndex";

export class Triangle extends Shape {
    constructor(point1: Point, point2: Point, point3: Point);
    constructor(
        point1: Point,
        point2: Point,
        point3: Point,
        color?: string,
        filled?: boolean
    ) {
        super([point1, point2, point3], color, filled);
    }

    getType(): string {
        return `${this.getTriangleType()} triangle`;
    }

    private getTriangleType() {
        const slidesLength = this.getSidesLength();

        switch (unique(slidesLength).length) {
            case 1:
                return "equilateral";
            case 2:
                return "isosceles";
            default:
                return "scalene";
        }
    }

    private getSidesLength(): number[] {
        return this.points.map((point, index) => {
            return point.distance(
                this.points[getNextItemIndex(this.points, index)]
            );
        });
    }

    toString(): string {
        const pointsText = this.points
            .map((p, index) => `v${index + 1}=${p.toString()}`)
            .join(",");

        return `Triangle[${pointsText}]`;
    }
}
