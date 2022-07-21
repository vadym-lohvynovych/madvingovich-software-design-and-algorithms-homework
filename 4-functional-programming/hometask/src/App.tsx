import { StyledEngineProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";

import { Filter, Filters, Search, Sort, Table } from "./components";
import { getAccounts, getImages, getUsers } from "./mocks/api";

import styles from "./App.module.scss";

import type { Account, Image, User } from "../types";
import type { Row } from "./components/Table";

import { dataConverter } from "./utils/dataConverter";
import { isRowVisible } from "./utils/isRowVisible";
import { OPTIONS, rowSortFunctionsMapping } from "./constants";

const mapTitle = (x: Filter) => x.title;
const filterByTitle = (title: string) => (x: Filter) => x.title !== title;

function App() {
  const [data, setData] = useState<Row[]>(undefined);
  const [filteredData, setFilteredData] = useState<Row[]>([]);

  const [selectedFilters, setSelectedFilters] = useState<Filter[]>([]);
  const [sort, setSort] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    // fetching data from API
    Promise.all([getUsers(), getImages(), getAccounts()]).then(
      ([users, images, accounts]: [User[], Image[], Account[]]) => {
        setData(dataConverter(users, accounts, images));
      }
    );
  }, []);

  useEffect(() => {
    // applying filters/sorting
    if (data) {
      let filtered = [...data];
      if (selectedFilters.length || search.trim()) {
        filtered = filtered.filter(isRowVisible(selectedFilters, search.trim()));
      }
      if (sort) {
        filtered.sort(rowSortFunctionsMapping[sort]);
      }
      setFilteredData(filtered);
    }
  }, [data, selectedFilters, sort, search]);

  const updateFilters = (selectedFilter: Filter) => {
    if (selectedFilters.map(mapTitle).includes(selectedFilter.title)) {
      setSelectedFilters((sf) => sf.filter(filterByTitle(selectedFilter.title)));
    } else {
      setSelectedFilters((sf) => [...sf, selectedFilter]);
    }
  };

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters options={OPTIONS} selected={selectedFilters} updateSelected={updateFilters} />
            <Sort selected={sort} updateSelected={setSort} />
          </div>
          <Search value={search} onChange={setSearch} />
        </div>
        <Table rows={filteredData} />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
