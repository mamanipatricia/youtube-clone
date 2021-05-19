import { Link, useLocation } from "react-router-dom";
import Icon from "../Icon/Icon";

import styles from "./SidebarRow.module.css";

export default function SidebarRow() {
  let { pathname } = useLocation();
  const sidebarSections = [
    {
      id: "123",
      title: "",
      items: [
        { pathname: "/", text: "Home", icon: "HOME" },
        { pathname: "/feed/explore", text: "Explore", icon: "EXPLORE" },
        {
          pathname: "/feed/subscription",
          text: "Subscription",
          icon: "SUBSCRIPTION",
        },
      ],
    },
    {
      id: "1234",
      title: "",
      items: [
        { pathname: "/feed/library", text: "Library", icon: "LIBRARY" },
        { pathname: "/feed/history", text: "History", icon: "HISTORY" },
        { pathname: "/feed/my-videos", text: "My Videos", icon: "VIDEO" },
        { pathname: "/feed/watch-later", text: "Watch Later", icon: "CLOCK" },
        { pathname: "/feed/liked-videos", text: "Liked Videos", icon: "LIKE" },
      ],
    },
  ];

  return (
    <div className={`${styles.sidebarContainer} custom-scroll`}>
      {sidebarSections.map((section) => {
        return (
          <div key={section.id} className={styles.section}>
            {section.items.map((item) => {
              return (
                <div
                  title={item.text}
                  key={item.pathname}
                  className={`${
                    pathname === item.pathname ? styles.sidebarBackground : ""
                  } ${
                    pathname === item.pathname
                      ? styles.sidebarBackground
                      : styles.sidebarBackgroundHover
                  }`}
                >
                  <Link className={styles.guideEntry} to={item.pathname}>
                    <span className={styles.sidebarIcon}>
                      <Icon
                        name={item.icon}
                        color={
                          pathname === item.pathname
                            ? "red"
                            : "var(--icon-secondary)"
                        }
                      />
                    </span>
                    <span> {item.text} </span>
                  </Link>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
