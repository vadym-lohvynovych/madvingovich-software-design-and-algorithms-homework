import { Filter } from "../components/Filters";
import { Row } from "../components/Table";

const rowSortFunctionsMapping = {
  asc: (a: Row, b: Row) => a.username.localeCompare(b.username),
  desc: (a: Row, b: Row) => b.username.localeCompare(a.username),
};

const emptySort = () => 0;

const searchableKeys = ["username", "country", "name"];

const includesString = (value: string, str: string) => value.toLowerCase().includes(str.toLowerCase());

const isFinded = (row: Row, search: string) => searchableKeys.some((key) => includesString(row[key], search));

const rowFiltered = (row: Row) => (filter: Filter) => filter.filterFunc(row);

const bySelectedFilters = (selectedFilters: Filter[]) => (row: Row) =>
  selectedFilters.length ? selectedFilters.some(rowFiltered(row)) : true;

const bySearchValue = (searchValue: string) => (row: Row) => searchValue ? isFinded(row, searchValue) : true;

export function searchFilterSort(data: Row[], selectedFilters: Filter[], searchValue: string, sort: string) {
  const sortFunction = rowSortFunctionsMapping[sort] || emptySort;
  return data.filter(bySelectedFilters(selectedFilters)).filter(bySearchValue(searchValue)).sort(sortFunction);
}
