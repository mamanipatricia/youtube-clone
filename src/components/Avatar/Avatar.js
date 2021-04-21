import React from "react";
import { Link } from "react-router-dom";
import styles from "./Avatar.module.css";

const SIZES = {
  extraSmall: "24px",
  small: "40px",
  medium: "48px",
  large: "80px",
};

export default function Avatar({ owner, size = "medium" }) {
  const { id, channelName, avatar } = owner;
  return (
    <div className={styles.avatarContainer}>
      <Link to={`/channel/${id}`}>
        <img
          className={styles.avatar}
          style={{ width: SIZES[size] }}
          src={avatar}
          alt={channelName}
          title={channelName}
        />
      </Link>
    </div>
  );
}
