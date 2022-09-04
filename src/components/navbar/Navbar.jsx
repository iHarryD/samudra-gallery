import navbarStyles from "./Navbar.module.css";
import genericStyles from "../../styles/Generic.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

export function Navbar() {
  return (
    <nav className={navbarStyles["navbar"]}>
      <div className={navbarStyles["widget-icons-container"]}>
        <button>
          <FontAwesomeIcon icon={faGear} />
        </button>
        <button>
          <FontAwesomeIcon icon={faBell} />
        </button>
      </div>
      <div className={navbarStyles["page-navbar"]}>
        <button
          className={`${genericStyles["primary-btn"]} ${navbarStyles["active-page"]}`}
        >
          Timeline
        </button>
        <button className={genericStyles["primary-btn"]}>Albums</button>
        <button className={genericStyles["primary-btn"]}>Events</button>
        <button className={genericStyles["primary-btn"]}>Favorites</button>
      </div>
      <button
        className={`${genericStyles["primary-btn"]} ${navbarStyles["upload-btn"]}`}
      >
        <FontAwesomeIcon icon={faPlusCircle} /> <span>Upload photos</span>
      </button>
    </nav>
  );
}
