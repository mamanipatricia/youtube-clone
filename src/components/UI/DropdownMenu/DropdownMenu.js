import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import Icon from "../../Icon/Icon";
import styles from "./DropdownMenu.module.css";

export default function DropdownMenu({
  menuContent = [],
  direction,
  position = "right",
  name,
}) {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);
  const menuRef = useRef(null);

  useClickAway(menuRef, () => {
    setIsVisibleMenu(!isVisibleMenu);
  });

  const toggleMenu = () => {
    setIsVisibleMenu(!isVisibleMenu);
  };

  return (
    <div className={styles.moreActionMenu}>
      <button onClick={toggleMenu} className={styles.menuButton}>
        <span
          className={`${styles.iconContainer} ${
            direction === "horizontal" ? styles.iconContainerHorizontal : ""
          }`}
        >
          <Icon name={name} color="var(--bg-sentiment)" />
        </span>
      </button>
      {isVisibleMenu && (
        <div
          ref={menuRef}
          className={`${styles.itemsContainer} ${styles[position]}`}
        >
          {menuContent.map((item, index) => {
            return (
              <div key={`item-${index}`} className={styles.items}>
                <Icon name={item.icon} />
                {item.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
