// @ts-nocheck
import { getNextItemIndex } from "./getNextItemIndex";

describe("getNextItemIndex", () => {
    it("should return n + 1 for any index apart from the last one", () => {
        expect(getNextItemIndex([1, 2, 3, 4], 0)).toEqual(1);
        expect(getNextItemIndex([1, 2, 3, 4], 1)).toEqual(2);
        expect(getNextItemIndex([1, 2, 3, 4], 2)).toEqual(3);
    });

    it("should return 0 for last index", () => {
        expect(getNextItemIndex([1, 2, 3], 2)).toEqual(0);
        expect(getNextItemIndex([1, 2, 3, 4, 5], 4)).toEqual(0);
    });

    it("should return 0 for indexes bigger than array length", () => {
        expect(getNextItemIndex([1, 2, 3], 123)).toEqual(0);
        expect(getNextItemIndex([1, 2, 3, 4, 5], 1234)).toEqual(0);
    });

    it("should return 0 for ampty array", () => {
        expect(getNextItemIndex([], 0)).toEqual(0);
        expect(getNextItemIndex([], 1)).toEqual(0);
        expect(getNextItemIndex([], 2)).toEqual(0);
    });
});
