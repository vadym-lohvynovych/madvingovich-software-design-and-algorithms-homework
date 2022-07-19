import { useState, useEffect } from "react";
import { StyledEngineProvider } from "@mui/material/styles";

import { Table, Filters, Sort, Search, Filter } from "./components";
import { getImages, getUsers, getAccounts } from "./mocks/api";

import styles from "./App.module.scss";

import type { Row } from "./components";
import type { Image, User, Account } from "../types";

import rows from "./mocks/rows.json";
import { dataConverter } from "./utils/dataConverter";
import { isRowVisible } from "./utils/isRowVisible";

// mockedData has to be replaced with parsed Promises’ data
const mockedData: Row[] = rows.data;

export const OPTIONS = [
  {
    title: "Without posts",
    filterFunc: (row: Row) => row.posts === 0,
  },
  {
    title: "More than 100 posts",
    filterFunc: (row: Row) => row.posts >= 100,
  },
];

const sortFunctionsMapping = {
  asc: (a: Row, b: Row) => a.username.localeCompare(b.username),
  desc: (a: Row, b: Row) => b.username.localeCompare(a.username),
};

function App() {
  const [data, setData] = useState<Row[]>(undefined);
  const [selectedFilters, setSelectedFilters] = useState<Filter[]>([]);
  const [sort, setSort] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const [filteredData, setFilteredData] = useState<Row[]>([]);

  useEffect(() => {
    if (data) {
      let filtered = data;
      if (selectedFilters.length || search) {
        filtered = data.filter(isRowVisible(selectedFilters, search));
      }
      if (sort) {
        filtered = filtered.slice().sort(sortFunctionsMapping[sort]);
      }
      setFilteredData(filtered);
    }
  }, [data, selectedFilters, sort, search]);

  const updateFilters = (selectedFilter: Filter) => {
    if (selectedFilters.map((f) => f.title).includes(selectedFilter.title)) {
      setSelectedFilters((sf) => sf.filter((f) => f.title !== selectedFilter.title));
    } else {
      setSelectedFilters((sf) => [...sf, selectedFilter]);
    }
  };

  useEffect(() => {
    // fetching data from API
    Promise.all([getUsers(), getImages(), getAccounts()]).then(
      ([users, images, accounts]: [User[], Image[], Account[]]) => {
        setData(dataConverter(users, accounts, images));
      }
    );
  }, []);

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
        <Table rows={filteredData.length ? filteredData : mockedData} />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
