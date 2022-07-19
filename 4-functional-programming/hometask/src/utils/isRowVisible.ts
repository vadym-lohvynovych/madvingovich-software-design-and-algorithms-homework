import { Filter } from "../components";
import { Row } from "../components/Table";

const isFinded = (row: Row, search: string) =>
  row.username.toLowerCase().includes(search) ||
  row.country.toLowerCase().includes(search) ||
  row.name.toLowerCase().includes(search);

const isFiltered = (row: Row, filters: Filter[]) => {
  return filters.some((filter) => filter.filterFunc(row));
};

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
