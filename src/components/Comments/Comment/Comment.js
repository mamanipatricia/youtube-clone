import React from "react";
import Avatar from "../../Avatar/Avatar";
import styles from "./Comment.module.css";
import Icon from "../../Icon/Icon";
import { Link } from "react-router-dom";

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
      <div>
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
          {/* <span>_/</span> */}
          <span>{publishedAt}</span>
        </div>
        <div className={styles.expander}>
          <div className={styles.content}>{textOriginal}</div>
        </div>
        <div className={styles.commentActionButton}>
          <div className={styles.likeButton}>
            <span>
              <Icon name="LIKE" />
            </span>
            <span> {likeCount}</span>
          </div>
          <div className={styles.likeButton}>
            <span className={styles.dislikeButton}>
              <Icon name="LIKE" />
            </span>
            <span> {dislikeCount}</span>
          </div>
          <div className={styles.footerButtons}>
            <button>REPLY {totalReplyCount}</button>
          </div>
        </div>
      </div>
      <div>
        <Icon name="MENU" />
      </div>
    </div>
  );
}
