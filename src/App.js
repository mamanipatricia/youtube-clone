import SidebarRow from "./components/SidebarRow/SidebarRow";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Channel } from "./components/Channel/Channel";
import Explore from "./components/Explore/Explore";
import Subscription from "./components/Subscription/Subscription";
import Library from "./components/Library/Library";
import History from "./components/History/History";
import MyVideos from "./components/MyVideos/MyVideos";
import WatchLater from "./components/WatchLater/WatchLater";
import LikedVideos from "./components/LikedVideos/LikedVideos";
import MiniSidebarRow from "./components/MiniGuide/MiniSidebarRow";
import { useGuide } from "./context/guideContext";
import Home from "./components/Home/Home";
import Watch from "./components/Watch/Watch";
import SearchResults from "./components/SearchResults/SearchResults";
import { FullPlaylist } from "./components/FullPlaylist/FullPlaylist";
import Icon from "./components/Icon/Icon";
import { ReactComponent as Logo } from "./assets/images/logo.svg";
import styles from "./App.module.css";

function App() {
  const [toggleSidebarRow, setToggleSidebarRow] = useGuide();
  const toggleSidebarRowHandle = () => {
    setToggleSidebarRow(false);
  };

  return (
    <Router>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <Navbar />
        </div>
        <div className={styles.sidebarRow}>
          <div className={styles.spacer}></div>
          {toggleSidebarRow ? <MiniSidebarRow /> : <SidebarRow />}
        </div>
        <div
          className={`${styles.bodyWrapper} ${
            toggleSidebarRow
              ? `${styles.miniSidebarRow} ${styles.bodyWrapperToggled}`
              : ""
          }`}
        >
          <div
            className={`${styles.innerSidebar} ${
              toggleSidebarRow ? styles.innerSidebarToggled : ""
            }`}
          >
            <div
              className={styles.backdropContainer}
              onClick={toggleSidebarRowHandle}
            ></div>
            <div className={styles.sidebarContainer}>
              <div className={styles.sidebar}>
                <div className={styles.startHeaderWrapper}>
                  <span
                    className={styles.menuGuide}
                    onClick={toggleSidebarRowHandle}
                  >
                    <Icon name="MENU_GUIDE" />
                  </span>
                  <div className={styles.iconLogo}>
                    <Link to="/">
                      <Logo />
                    </Link>
                  </div>
                </div>
                <SidebarRow />
              </div>
            </div>
          </div>

          <Switch>
            <Route
              path="/"
              exact
              render={(routeProps) => <Home {...routeProps} />}
            />
            <Route exact path="/channel/:channelId*" component={Channel} />
            <Route path="/results" component={SearchResults} />
            <Route path="/feed/explore" component={Explore} />
            <Route path="/feed/subscription" component={Subscription} />
            <Route path="/feed/library" component={Library} />
            <Route path="/feed/history" component={History} />
            <Route path="/feed/my-videos" component={MyVideos} />
            <Route path="/feed/watch-later" component={WatchLater} />
            <Route path="/feed/liked-videos" component={LikedVideos} />
            <Route path="/playlist" component={FullPlaylist} />
            <Route path="/watch/:videoId" component={Watch} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
