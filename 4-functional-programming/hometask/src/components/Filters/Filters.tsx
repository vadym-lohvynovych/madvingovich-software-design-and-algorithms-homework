import Checkbox from "@mui/material/Checkbox";
import { Row } from "../Table";

import styles from "./Filters.module.scss";

export interface Filter {
  title: string;
  filterFunc: (row: Row) => boolean;
}

interface FiltersProps {
  selected: Filter[];
  updateSelected: (val: Filter) => void;
  options: Filter[];
}

export function Filters(props: FiltersProps) {
  return (
    <div className={styles.group}>
      <div className={styles.title}>Filter by posts</div>
      <ul className={styles.list}>
        {props.options.map((option) => (
          <li value={option.title} onClick={() => props.updateSelected(option)} key={option.title}>
            <Checkbox
              checked={!!props.selected.find((filter) => filter.title === option.title)}
              value={option.title}
              onChange={() => props.updateSelected(option)}
              size="small"
              color="primary"
            />{" "}
            {option.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
