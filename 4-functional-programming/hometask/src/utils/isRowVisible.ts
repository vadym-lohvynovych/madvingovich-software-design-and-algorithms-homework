import { Filter } from "../components";
import { Row } from "../components/Table";

const searchableKeys = ["username", "country", "name"];

const includesString = (value: string, str: string) => value.toLowerCase().includes(str.toLowerCase());

const isFinded = (row: Row, search: string) => searchableKeys.some((key) => includesString(row[key], search));

const isRowFiltered = (row: Row, filters: Filter[]) => filters.some((filter: Filter) => filter.filterFunc(row));

export const isRowVisible = (filters: Filter[], search: string) => (row: Row) => {
    const noFilters = !filters.length && !search;
    const filtered = filters.length && isRowFiltered(row, filters);
    const finded = Boolean(search.trim()) && isFinded(row, search);

    return noFilters || filtered || finded ? true : false;
};
