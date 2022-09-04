import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pageHeaderStyles from "./PageHeader.module.css";

export function PageHeader() {
  return (
    <div className={pageHeaderStyles["page-header"]}>
      <div className={pageHeaderStyles["p1-heading"]}>Library</div>
      <div className={pageHeaderStyles["search-bar-container"]}>
        <input
          className={pageHeaderStyles["search-input"]}
          placeholder="Search all photos"
        />
        <button className={pageHeaderStyles["search-btn"]}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </div>
  );
}
