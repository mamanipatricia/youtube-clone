import { Link } from "react-router-dom";
import styles from "./Avatar.module.css";

const SIZES = {
  extraSmall: "24px",
  small: "40px",
  medium: "48px",
  large: "80px",
};

export default function Avatar({ channel, size = "medium" }) {
  const { channelId, channelName, avatar } = channel;
  return (
    <div>
      <Link to={`/channel/${channelId}`}>
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
