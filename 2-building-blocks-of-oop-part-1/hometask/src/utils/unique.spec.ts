// @ts-nocheck
import { unique } from "./unique";

describe("unique", () => {
    it("should return only unique items for numbers array", () => {
        expect(unique([1, 2, 2, 4, 4])).toEqual([1, 2, 4]);
        expect(unique([1, 1, 3, 3])).toEqual([1, 3]);
        expect(unique([1, 1, 1, 1])).toEqual([1]);
    });

    it("should return only unique items for strings array", () => {
        expect(unique(["one", "two", "one", "two", "three"])).toEqual([
            "one",
            "two",
            "three",
        ]);
        expect(unique(["one", "one", "one", "one"])).toEqual(["one"]);
        expect(unique(["test", "test2", "test", "test"])).toEqual([
            "test",
            "test2",
        ]);
    });

    it("should return empty array for empty array", () => {
        expect(unique([])).toEqual([]);
    });
});
