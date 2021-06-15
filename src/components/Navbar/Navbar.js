import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import GuideContext from "../../context/guideContext";
import Search from "../Search/Search";
import Icon from "../Icon/Icon";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [toggleSidebarRow, setToggleSidebarRow] = useContext(GuideContext);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSidebarRowHandle = () => {
    setToggleSidebarRow(!toggleSidebarRow);
  };

  const showSearchComponentHandle = () => {
    setIsSearchVisible(true);
  };

  return (
    <div
      className={`${styles.navbarContainer} ${
        isSearchVisible ? styles.searchVisible : ""
      }`}
    >
      <div className={styles.startHeader}>
        <div className={styles.startHeaderWrapper}>
          <span className={styles.menuGuide} onClick={toggleSidebarRowHandle}>
            <Icon name="MENU_GUIDE" />
          </span>
          <div className={styles.iconLogo}>
            <Link to="/">
              <Logo />
            </Link>
          </div>
        </div>
        <button
          onClick={() => setIsSearchVisible(false)}
          className={`${styles.backButton} ${styles.hidden} ${
            isSearchVisible ? styles.visible : ""
          }`}
        >
          <Icon name="BACK_ARROW" />
        </button>
      </div>
      <div className={styles.centerHeader}>
        <Search isSearchVisible={isSearchVisible} />
      </div>
      <div className={styles.endHeader}>
        <button
          onClick={showSearchComponentHandle}
          className={styles.searchButton}
        >
          <Icon name="SEARCH" />
        </button>
        <button>
          <Icon name="CREATE" />
        </button>
        <button>
          <Icon name="APPS" />
        </button>
        <button>
          <Icon name="NOTIFICATION_FILLED" />
        </button>
        <button>
          <Icon name="PROFILE" />
        </button>
      </div>
    </div>
  );
}
