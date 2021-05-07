import React, { useState, useRef, useEffect } from "react";
import styles from "./AuthorContent.module.css";
import author from "../../../logo.svg";
// import Avatar from "../../Avatar/Avatar";
const SAFARI_BR = "<br>";

export default function AuthorComment({ channel }) {
  const [html, setHtml] = useState("");
  const [isVisibleActionButtons, setIsVisibleActionButtons] = useState(false);
  const inputRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);

  const handleChange = (event) => {
    const { innerHTML, textContent } = event.currentTarget;
    const htmlValue = innerHTML === SAFARI_BR ? "" : innerHTML;
    setHtml(htmlValue);
  };
  const commentHandle = () => {};

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

  return (
    <div className={styles.commentSimpleBoxContainer}>
      <div className={styles.authorThumbnail}>
        {/* <Avatar size="large" channel={channel} /> */}
        <img src={author} alt="author avatar" />
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
              className={isTyping ? styles.background : styles.footerButtons}
              onClick={commentHandle}
            >
              COMMENT
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
