import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import GuideContext from "../../context/guideContext";
import Search from "../Search/Search";
import Icon from "../Icon/Icon";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import styles from "./Navbar.module.css";
// import SignInButton from "../UI/SignInButton/SignInButton";
import Login from "../../GoogleAuth/Login";
import DropdownMenu from "../UI/DropdownMenu/DropdownMenu";
import { MENU_SETTINGS, MENU_APP, MENU_CREATE } from "../Constants/Constants";
import { useAuth } from "../../context/authContext";

export default function Navbar() {
  const [toggleSidebarRow, setToggleSidebarRow] = useContext(GuideContext);
  const { loggedIn, user, signOut } = useAuth();
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSidebarRowHandle = () => {
    setToggleSidebarRow(!toggleSidebarRow);
  };

  const showSearchComponentHandle = () => {
    setIsSearchVisible(true);
  };

  const MENU_PROFILE = [
    {
      id: "1p",
      label: "Your channel",
      icon: "PROFILE_SQUARE",
    },
    {
      id: "2p",
      label: "Purchases and membership",
      icon: "DOLLAR",
    },
    {
      id: "3p",
      label: "YouTube Studio",
      icon: "YT_STUDIO",
    },
    {
      id: "4p",
      label: "Switch account",
      icon: "SWITCH_ACCOUNT",
    },
    {
      id: "5p",
      label: "Sign out",
      icon: "SIGN_OUT",
      action: signOut,
    },
    ...MENU_SETTINGS,
  ];

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
        {loggedIn && (
          <div>
            <DropdownMenu
              name="CREATE"
              color="var(--bg-red)"
              menuContent={MENU_CREATE}
              position="left"
            />
          </div>
        )}
        <div>
          <DropdownMenu
            name="APPS"
            color="var(--bg-icons)"
            menuContent={MENU_APP}
            position="right"
          />
        </div>
        {!loggedIn && (
          <DropdownMenu
            name="MENU"
            color="var(--bg-icons)"
            menuContent={MENU_SETTINGS}
            position="right"
          />
        )}
        {loggedIn ? (
          <>
            <button>
              <Icon name="NOTIFICATION_FILLED" />
            </button>
            <div>
              <DropdownMenu
                menuContent={MENU_PROFILE}
                color="var(--bg-sentiment)"
                position="right"
              >
                <img className={styles.profileImage} src={user.imageUrl} />
              </DropdownMenu>
            </div>
          </>
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
}
