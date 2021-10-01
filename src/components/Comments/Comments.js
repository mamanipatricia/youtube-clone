import Icon from "../Icon/Icon";
import styles from "./Comments.module.css";
import AuthorComment from "./AuthorComment/AuthorComment";
import Comment from "./Comment/Comment";
import { useEffect, useState } from "react";
import { youTubeService, commentService, userService } from "../../services";

export default function Comments({ videoId }) {
  const [commentsThreads, setCommentsThreads] = useState();
  const [totalResults, setTotalResults] = useState(0);
  const [errorComment, setErrorComment] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const getThreadsComments = async () => {
    try {
      const { data } = await youTubeService.getThreadsComments(videoId);
      const { commentThreadsData, totalResults: totalResultsThreadsComments } =
        data;
      setCommentsThreads(commentThreadsData);
      setTotalResults(totalResultsThreadsComments);
    } catch (err) {
      if (err.message.includes("parameter has disabled comments")) {
        setErrorComment(true);
      }
    }
  };

  const getUser = async () => {
    try {
      const data = await userService.getUser();
      if (Array.isArray(data?.items)) {
        const user = {
          channelId: data?.items[0]?.id,
          name: data?.items[0]?.snippet.title,
        };
        setUserInfo(user);
      }
    } catch (err) {
      console.log(`err`, err);
    }
  };

  useEffect(() => {
    getThreadsComments();
    getUser();
    // clean up the state when the component unmounts
    return () => {
      setCommentsThreads(null);
      setTotalResults(0);
      setUserInfo({});
    };
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
              <div type="button">
                <Icon name="DROPDOWN_MENU" color="var(--bg-sentiment)" />
              </div>
              <span>SORT BY</span>
            </div>
          </div>
          <AuthorComment onSubmit={onSubmit} channel={userInfo} />
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
