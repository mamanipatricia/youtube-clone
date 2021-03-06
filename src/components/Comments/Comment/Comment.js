import { Link } from "react-router-dom";
import DropdownMenu from "../../UI/DropdownMenu/DropdownMenu";
import { getTimestamp } from "../../../Utils/Timestamp";
import Avatar from "../../Avatar/Avatar";
import Icon from "../../Icon/Icon";
import { MENU_COMMENTS } from "../../Constants/Constants";
import styles from "./Comment.module.css";

export default function Comment({ comment } = {}) {
  const {
    channel,
    authorContent: {
      authorName,
      publishedAt,
      textOriginal,
      likeCount,
      dislikeCount,
      totalReplyCount,
    },
  } = comment;

  return (
    <div className={styles.bodyContainer}>
      <div className={styles.avatar}>
        <Avatar size="small" channel={channel} />
      </div>
      <div className={styles.comment}>
        <div className={styles.header}>
          <h3>
            <Link
              className={styles.authorText}
              to={`/channel/${channel.channelId}`}
            >
              <span>{authorName}</span>
            </Link>
          </h3>
          <span className={styles.publishedTime}>
            {getTimestamp(publishedAt)}
          </span>
        </div>
        <div className={styles.expander}>
          <div className={styles.content}>{textOriginal}</div>
        </div>
        <div className={styles.commentActionButton}>
          <div className={styles.likeButton}>
            <span>
              <Icon name="LIKE" color="var(--text-sentiment)" />
            </span>
            <span> {likeCount || ""}</span>
          </div>
          <div className={styles.likeButton}>
            <span className={styles.dislike}>
              <Icon name="DISLIKE" color="var(--text-sentiment)" />
            </span>
            <span> {dislikeCount || ""}</span>
          </div>
          <div className={styles.footerButtons}>
            <button className={styles.reply}>REPLY {totalReplyCount}</button>
          </div>
        </div>
      </div>
      <div>
        <DropdownMenu
          name="MENU"
          menuContent={MENU_COMMENTS}
          position="right"
        />
      </div>
    </div>
  );
}
