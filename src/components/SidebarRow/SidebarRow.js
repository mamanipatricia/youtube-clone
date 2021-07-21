import { Link, useLocation } from "react-router-dom";
import Icon from "../Icon/Icon";
import music from "../../assets/images/sidebar/music.jpg";
import sports from "../../assets/images/sidebar/sports.jpg";
import videogame from "../../assets/images/sidebar/videogame.jpg";
import news from "../../assets/images/sidebar/news.jpg";
import learning from "../../assets/images/sidebar/learning.jpg";
import three60video from "../../assets/images/sidebar/360video.jpg";

import styles from "./SidebarRow.module.css";
import Login from "../../GoogleAuth/Login";
import { useAuth } from "../../context/authContext";
import { SidebarSubscription } from "../Subscription/SideBarSubscription/SidebarSubscription";

const sidebarSections = [
  {
    id: "section-1",
    title: "",
    items: [
      { pathname: "/", text: "Home", icon: "HOME" },
      { pathname: "/feed/explore", text: "Explore", icon: "EXPLORE" },
      {
        pathname: "/feed/subscription",
        text: "Subscription",
        icon: "SUBSCRIPTION",
      },
    ],
  },
  {
    id: "section-2",
    title: "",
    items: [
      { pathname: "/feed/library", text: "Library", icon: "LIBRARY" },
      { pathname: "/feed/history", text: "History", icon: "HISTORY" },
      {
        pathname: "/feed/my-videos",
        text: "My Videos",
        icon: "VIDEO",
        requiredLogin: true,
      },
      {
        pathname: "/feed/watch-later",
        text: "Watch Later",
        icon: "CLOCK",
        requiredLogin: true,
      },
      {
        pathname: "/feed/liked-videos",
        text: "Liked Videos",
        icon: "LIKE",
        requiredLogin: true,
      },
    ],
  },
];

const bestOfYTItems = [
  {
    id: "section-3",
    title: "THE BEST OF YOUTUBE",
    items: [
      { pathname: "/feed/music", text: "Music", icon: music },
      { pathname: "/feed/sports", text: "Sports", icon: sports },
      {
        pathname: "/feed/video-game",
        text: "Video Game",
        icon: videogame,
      },
      { pathname: "/feed/news", text: "News", icon: news },
      { pathname: "/feed/learning", text: "Learning", icon: learning },
      { pathname: "/feed/360-video", text: "360° video", icon: three60video },
    ],
  },
  {
    id: "section-4",
    title: "",
    items: [
      {
        pathname: "/feed/browse-channel",
        text: "Browse channel",
        icon: "PLUS",
      },
    ],
  },
];

const moreFromYT = [
  {
    id: "section-5",
    title: "MORE FROM YOUTUBE",
    items: [
      {
        pathname: "/feed/youtube-premium",
        text: "YouTube Premium",
        icon: "YOUTUBE",
      },
      { pathname: "/feed/live", text: "Live", icon: "LIVE" },
    ],
  },
  {
    id: "section-6",
    title: "",
    items: [
      {
        pathname: "/feed/setting",
        text: "Setting",
        icon: "SETTING",
      },
      { pathname: "/feed/report", text: "Report History", icon: "REPORT" },
      { pathname: "/feed/help", text: "Help", icon: "HELP" },
      {
        pathname: "/feed/post-comments",
        text: "Post Comments",
        icon: "POST_COMMENTS",
      },
    ],
  },
];

export default function SidebarRow() {
  let { pathname } = useLocation();
  const { loggedIn } = useAuth();

  return (
    <div className={`${styles.sidebarContainer} custom-scroll`}>
      {sidebarSections.map((section) => {
        return (
          <div key={section.id} className={styles.section}>
            {section.items
              .filter((item) => (item.requiredLogin ? loggedIn : true))
              .map((item) => {
                return (
                  <div
                    title={item.text}
                    key={item.pathname}
                    className={`${
                      pathname === item.pathname ? styles.sidebarBackground : ""
                    } ${
                      pathname === item.pathname
                        ? styles.sidebarBackground
                        : styles.sidebarBackgroundHover
                    }`}
                  >
                    <Link className={styles.guideEntry} to={item.pathname}>
                      <span className={styles.sidebarIcon}>
                        <Icon
                          name={item.icon}
                          color={
                            pathname === item.pathname
                              ? "red"
                              : "var(--icon-secondary)"
                          }
                        />
                      </span>
                      <span> {item.text} </span>
                    </Link>
                  </div>
                );
              })}
          </div>
        );
      })}
      {!loggedIn && (
        <div className={`${styles.SignInButton} ${styles.section}`}>
          Access to Like the videos, make comments and subscribe.
          <Login />
        </div>
      )}
      <div>
        {/* User Channels Items*/}
        {loggedIn && <SidebarSubscription />}
        {/* Best of YouTube items */}
        {!loggedIn &&
          bestOfYTItems.map((section) => {
            return (
              <div key={section.id} className={styles.section}>
                <h3 className={styles.title}>{section.title}</h3>
                {section.items.map((item) => {
                  return (
                    <div
                      title={item.text}
                      key={item.pathname}
                      className={`${
                        pathname === item.pathname
                          ? styles.sidebarBackground
                          : ""
                      } ${
                        pathname === item.pathname
                          ? styles.sidebarBackground
                          : styles.sidebarBackgroundHover
                      }`}
                    >
                      <Link className={styles.guideEntry} to={item.pathname}>
                        <span className={styles.sidebarIcon}>
                          <img
                            key={section.id}
                            className={styles.image}
                            src={item.icon}
                            alt={item.text}
                          />
                        </span>
                        <span> {item.text} </span>
                      </Link>
                    </div>
                  );
                })}
              </div>
            );
          })}
        {/* More from YouTube Items */}
        {moreFromYT.map((section) => {
          return (
            <div key={section.id} className={styles.section}>
              {section.title ? (
                <h3 className={styles.title}>{section.title}</h3>
              ) : null}
              {section.items.map((item) => {
                return (
                  <div
                    title={item.text}
                    key={item.pathname}
                    className={`${
                      pathname === item.pathname ? styles.sidebarBackground : ""
                    } ${
                      pathname === item.pathname
                        ? styles.sidebarBackground
                        : styles.sidebarBackgroundHover
                    }`}
                  >
                    <Link className={styles.guideEntry} to={item.pathname}>
                      <span className={styles.sidebarIcon}>
                        <Icon
                          name={item.icon}
                          color={
                            pathname === item.pathname
                              ? "red"
                              : "var(--icon-secondary)"
                          }
                        />
                      </span>
                      <span> {item.text} </span>
                    </Link>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className={styles.footer}>
        <p>
          Terms Privacy Policies and security. How YouTube works. Try new
          features
        </p>
        <span className={styles.footerCopyright}>© 2021 Google LLC</span>
      </div>
    </div>
  );
}
