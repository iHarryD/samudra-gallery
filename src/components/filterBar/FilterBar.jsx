import genericStyles from "../../styles/Generic.module.css";
import filterBarStyles from "./FilterBar.module.css";

export function FilterBar({ filterState, filterStateSetter }) {
  return (
    <div className={filterBarStyles["filter-bar"]}>
      <ul className={filterBarStyles["filters-container"]}>
        {[
          "All photos",
          "Architecture",
          "🏔 Kashmir",
          "⛵ Seaside",
          "🐟 Lake view",
          "Italy",
          "China",
          "Argentina",
        ].map((filter) => (
          <li
            key={filter}
            className={
              filterState.toLowerCase() === filter.toLowerCase()
                ? filterBarStyles["active-filter"]
                : ""
            }
          >
            <button onClick={() => filterStateSetter(filter.toLowerCase())}>
              {filter}
            </button>
          </li>
        ))}
      </ul>
      <button
        className={`${genericStyles["primary-btn"]} ${filterBarStyles["new-category-btn"]}`}
      >
        + New category
      </button>
    </div>
  );
}
