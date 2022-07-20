import { Filter } from "../components";
import { Row } from "../components/Table";

const searchableKeys = ["username", "country", "name"];

const includesString = (value: string, str: string) => value.toLowerCase().includes(str.toLowerCase());

const isFinded = (row: Row, search: string) => searchableKeys.some((key) => includesString(row[key], search));

const rowFiltered = (row: Row) => (filter: Filter) => filter.filterFunc(row);

const isFiltered = (row: Row, filters: Filter[]) => filters.some(rowFiltered(row));

export const isRowVisible = (filters: Filter[], search: string) => (row: Row) => {
  let shoudBeVisible = false;
  if (search && isFinded(row, search)) {
    shoudBeVisible = true;
  }
  if (filters.length && isFiltered(row, filters)) {
    shoudBeVisible = true;
  }
  return shoudBeVisible;
};
