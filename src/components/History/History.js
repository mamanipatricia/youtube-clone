import Icon from "../Icon/Icon";
import styles from "./History.module.css";

export default function History() {
  return (
    <div className={styles.historyContainer}>
      <div className={styles.historyLeftSide}>
        <Icon
          name="HISTORY"
          color="var(--bg-sentiment)"
          className={{ width: "120", height: "120" }}
        />
        <div className={styles.textContent}>
          <h1 className={styles.title}>Keep track of what you watch</h1>
          <span>
            You must log in to your account to see your watch history.
            <a href="#"> More information</a>
          </span>
        </div>
        <button className={styles.loginButton}>
          <Icon
            name="PROFILE"
            color="var(--bg-type)"
            className={{ width: "24", height: "24" }}
          />
          <span className={styles.singIn}>SIGN IN</span>
        </button>
      </div>
      <div className={styles.watchRightSideContainer}>
        <div className={styles.searchInputContainer}>
          <Icon name="SEARCH" />
          <input
            className={styles.searchHistory}
            type="text"
            placeholder="Search watch history"
          />
        </div>
        <div className={styles.watchRightSide}>
          <h2 className={styles.titleRight}>History type</h2>
          <div className={styles.radioOptions}>
            <div className={styles.watchHistory}>
              <label className={styles.label} htmlFor="watch">
                Watch history
              </label>
              <input
                type="radio"
                id="watch"
                name="history"
                value="watch"
                checked
                className={styles.buttonInput}
              />
            </div>
            <div className={styles.communityHistory}>
              <label className={styles.label} htmlFor="community">
                Community
              </label>
              <input
                type="radio"
                id="community"
                name="history"
                value="community"
                className={styles.buttonInput}
              />
            </div>
          </div>
        </div>
        <div className={styles.moreOption}>
          <div>
            <span>
              <Icon name="CLEAR" color="var(--bg-icons)" />
              CLEAR ALL WATCH HISTORY
            </span>
          </div>
          <div>
            <span>
              <Icon name="PAUSE" color="var(--bg-icons)" />
              PAUSE WATCH HISTORY
            </span>
          </div>
          <div>
            <span>
              <Icon name="SETTING" color="var(--bg-icons)" />
              MANAGE ALL HISTORY
            </span>
          </div>
          <span>Watch and search history</span>
          <span>Comments</span>
          <span>Live chat</span>
        </div>
      </div>
    </div>
  );
}
