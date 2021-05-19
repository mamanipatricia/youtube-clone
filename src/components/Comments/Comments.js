import Icon from "../Icon/Icon";
import styles from "./Comments.module.css";
import AuthorComment from "./AuthorComment/AuthorComment";
import Comment from "./Comment/Comment";

export default function Comments({ comments = [], totalResults }) {
  return (
    <div>
      <div className={styles.commentsHeader}>
        <span className={styles.commentsCount}>{totalResults} Comments</span>
        <div className={styles.dropdownMenu}>
          <div className={styles.sortComments} type="button">
            <Icon name="DROPDOWN_MENU" color="var(--bg-sentiment)" />
          </div>
          <span>SORT BY</span>
        </div>
      </div>
      <AuthorComment channel={{}} />
      {comments.map((commentItem, index) => {
        return <Comment key={`comment-${index}`} comment={commentItem} />;
      })}
    </div>
  );
}
