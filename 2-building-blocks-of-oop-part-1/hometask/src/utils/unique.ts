export const unique = (arr: (string | number)[]): (string | number)[] =>
    Array.from(new Set(arr));
