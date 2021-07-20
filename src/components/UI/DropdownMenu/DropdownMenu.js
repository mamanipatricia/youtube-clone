import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import { useAuth } from "../../../context/authContext";
import Icon from "../../Icon/Icon";
import styles from "./DropdownMenu.module.css";

export default function DropdownMenu({
  menuContent = [],
  direction,
  position = "right",
  name,
  color,
  children,
}) {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);
  const menuRef = useRef(null);
  const { loggedIn, user } = useAuth();

  useClickAway(menuRef, () => {
    setIsVisibleMenu(!isVisibleMenu);
  });

  const toggleMenu = (event) => {
    setIsVisibleMenu(!isVisibleMenu);
    event.stopPropagation();
  };

  return (
    <div className={styles.moreActionMenu}>
      <button onClick={toggleMenu} className={styles.menuButton}>
        {name ? (
          <span
            className={`${styles.iconContainer} ${
              direction === "horizontal" ? styles.iconContainerHorizontal : ""
            }`}
          >
            <Icon name={name} color={"var(--bg-sentiment)"} />
          </span>
        ) : (
          children
        )}
      </button>
      {isVisibleMenu && (
        <div
          ref={menuRef}
          className={`${styles.itemsContainer} ${styles[position]}`}
        >
          {loggedIn && (
            <div className={styles.menuOwnerContainer}>
              <img className={styles.profileImage} src={user.imageUrl} />
              <div className={styles.menuOwner}>
                <span className={styles.name}>{user.name}</span>
                <span className={styles.description}>
                  Manage your Google account
                </span>
              </div>
            </div>
          )}
          {menuContent.map((item) => {
            return (
              <div
                onClick={item.action}
                key={`item-${item.id}`}
                className={styles.items}
              >
                <Icon name={item.icon} color={color} />
                {item.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
