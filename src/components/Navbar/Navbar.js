import React, { useContext } from "react";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import Icon from "../Icon/Icon";
import GuideContext from "../../context/guideContext";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggleSidebarRow, setToggleSidebarRow] = useContext(GuideContext);
  const toggleSidebarRowHandle = () => {
    setToggleSidebarRow(!toggleSidebarRow);
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.startHeader}>
        <span onClick={toggleSidebarRowHandle}>
          <Icon name="MENU_GUIDE" />
        </span>
        <div className={styles.iconLogo}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
      </div>
      <div className={styles.centerHeader}>
        <Search />
      </div>
      <div className={styles.endHeader}>
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
