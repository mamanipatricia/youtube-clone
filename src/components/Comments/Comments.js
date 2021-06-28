import Icon from "../Icon/Icon";
import styles from "./Comments.module.css";
import AuthorComment from "./AuthorComment/AuthorComment";
import Comment from "./Comment/Comment";
import { useEffect, useState } from "react";
import { youTubeService, commentService } from "../../services";

export default function Comments({ videoId }) {
  const [commentsThreads, setCommentsThreads] = useState();
  const [totalResults, setTotalResults] = useState(0);
  const [errorComment, setErrorComment] = useState(false);

  const getThreadsComments = async () => {
    try {
      const { data } = await youTubeService.getThreadsComments(videoId);
      const { commentThreadsData, totalResults } = data;
      setCommentsThreads(commentThreadsData);
      setTotalResults(totalResults);
    } catch (err) {
      if (err.message.includes("parameter has disabled comments")) {
        setErrorComment(true);
      }
    }
  };

  useEffect(() => {
    getThreadsComments();
  }, [videoId]);

  const onSubmit = async (html) => {
    await commentService.addComment(html, videoId);
  };

  return (
    <>
      {!errorComment ? (
        <div className={styles.commentsWrapper}>
          <div className={styles.commentsHeader}>
            <span className={styles.commentsCount}>
              {totalResults} Comments
            </span>
            <div className={styles.dropdownMenu}>
              <div className={styles.sortComments} type="button">
                <Icon name="DROPDOWN_MENU" color="var(--bg-sentiment)" />
              </div>
              <span>SORT BY</span>
            </div>
          </div>
          <AuthorComment onSubmit={onSubmit} />
          {commentsThreads?.map((commentItem, index) => {
            return <Comment key={`comment-${index}`} comment={commentItem} />;
          })}
        </div>
      ) : (
        "Comments are turned off"
      )}
    </>
  );
}
