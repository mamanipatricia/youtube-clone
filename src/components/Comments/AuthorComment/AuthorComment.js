import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import styles from "./AuthorContent.module.css";

// For some reason Safari inserts `<br>` after user removes text from input
const SAFARI_BR = "<br>";

export default function AuthorComment({ onSubmit, channel }) {
  const { user } = useAuth();

  const [html, setHtml] = useState("");
  const [isVisibleActionButtons, setIsVisibleActionButtons] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef(null);

  const handleChange = (event) => {
    const { innerHTML } = event.currentTarget;
    const htmlValue = innerHTML === SAFARI_BR ? "" : innerHTML;
    setHtml(htmlValue);
  };

  const showActionButtons = () => {
    setIsVisibleActionButtons(true);
  };

  const onCancelCreateComment = () => {
    setIsVisibleActionButtons(false);
    inputRef.current.innerHTML = "";
    setHtml("");
  };

  useEffect(() => {
    html.length > 0 ? setIsTyping(true) : setIsTyping(false);
  }, [html]);

  const addComment = () => {
    onSubmit(html);
    onCancelCreateComment();
  };

  return (
    <div className={styles.commentSimpleBoxContainer}>
      <div className={styles.authorThumbnailContainer}>
        <Link to={`/channel/${channel.channelId}`}>
          <img
            title={channel.name}
            className={styles.authorThumbnail}
            src={user?.imageUrl}
            alt="author avatar"
          />
        </Link>
      </div>
      <div className={styles.commentSimpleBox}>
        <div className={styles.commentBox}>
          <div className={styles.formControl}>
            <div
              contentEditable
              aria-label="add a public comment"
              className={`${styles.simpleBoxPlaceholder} ${
                html.length > 0 ? styles.touched : ""
              }`}
              onInput={handleChange}
              onClick={showActionButtons}
              ref={inputRef}
            />
            <span className={styles.placeholderText}>
              Add a public comment...
            </span>
            <div
              className={`${styles.underline} ${
                isVisibleActionButtons ? styles.focusedLine : ""
              }`}
            />
            <div className={styles.underline}>
              <div className={styles.unfocusedLine} />
              <div className={styles.focusedLine} />
            </div>
          </div>
        </div>
        {isVisibleActionButtons && (
          <div className={styles.footerButtons}>
            <button onClick={onCancelCreateComment}>CANCEL</button>
            <button
              onClick={addComment}
              className={isTyping ? styles.background : styles.footerButtons}
            >
              COMMENT
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
