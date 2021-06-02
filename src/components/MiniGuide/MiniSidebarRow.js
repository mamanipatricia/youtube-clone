import { Link, useLocation } from "react-router-dom";
import Icon from "../Icon/Icon";
import styles from "./MiniSidebarRow.module.css";

export default function MiniSidebarRow() {
  let { pathname } = useLocation();

  return (
    <div className={styles.miniSidebarRowContainer}>
      <Link className={styles.miniSidebarRow} to="/">
        <Icon
          name="HOME"
          color={pathname === "/" ? "red" : "var(--icon-secondary)"}
        />
        <span> Home </span>
      </Link>
      <Link className={styles.miniSidebarRow} to="/feed/explore">
        <Icon
          name="EXPLORE"
          color={pathname === "/feed/explore" ? "red" : "var(--icon-secondary)"}
        />
        <span> Explore </span>
      </Link>
      <Link className={styles.miniSidebarRow} to="/feed/subscription">
        <Icon
          name="SUBSCRIPTION"
          color={
            pathname === "/feed/subscription" ? "red" : "var(--icon-secondary)"
          }
        />
        <span> Subscription </span>
      </Link>
      <Link className={styles.miniSidebarRow} to="/feed/library">
        <Icon
          name="LIBRARY"
          color={pathname === "/feed/library" ? "red" : "var(--icon-secondary)"}
        />
        <span> Library </span>
      </Link>
    </div>
  );
}
