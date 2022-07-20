import type { Row } from "./components/Table";

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

export const rowSortFunctionsMapping = {
  asc: (a: Row, b: Row) => a.username.localeCompare(b.username),
  desc: (a: Row, b: Row) => b.username.localeCompare(a.username),
};
