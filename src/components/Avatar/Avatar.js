import { useHistory } from "react-router-dom";
import styles from "./Avatar.module.css";

const SIZES = {
  extraSmall: "24px",
  small: "40px",
  medium: "48px",
  large: "80px",
};

export default function Avatar({ channel, size = "medium" }) {
  const history = useHistory();
  const { channelId, channelName, avatar } = channel;

  const goToChannel = (event) => {
    history.push(`/channel/${channelId}`);
    event.stopPropagation();
  };

  return (
    <div>
      <img
        onClick={goToChannel}
        className={styles.avatar}
        style={{ width: SIZES[size] }}
        src={avatar}
        alt={channelName}
        title={channelName}
      />
    </div>
  );
}
