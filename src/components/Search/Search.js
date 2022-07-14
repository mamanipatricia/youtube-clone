import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ModalMic } from "../UI/Modal/ModalMic";
import Icon from "../Icon/Icon";
import styles from "./Search.module.css";

function Search({ isSearchVisible }) {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchQuery = query.get("search_query");

  const [keyword, setKeyword] = useState(searchQuery || "");

  const [modalIsOpen, setIsOpen] = useState(false);

  const searchHandle = (value) => {
    setKeyword(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (keyword.trim().length > 0 && !modalIsOpen) {
      history.push({
        pathname: `/results`,
        search: `?search_query=${keyword}`,
      });
    }
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onChangedText = (text) => {
    searchHandle(text);
    history.push({
      pathname: `/results`,
      search: `?search_query=${text}`,
    });
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.searchForm} onSubmit={onSubmit}>
        <div
          className={`${styles.search} ${
            isSearchVisible ? styles.searchVisible : ""
          }`}
        >
          <div className={styles.searchContainer}>
            <input
              value={keyword}
              onChange={(e) => searchHandle(e.target.value)}
              className={styles.searchInput}
              placeholder="Search"
              aria-label="search input para test de audio eye"
            />
          </div>
          <button aria-label="search button para test de audio eye" className={styles.searchButton}>
            <Icon name="SEARCH" />
          </button>
        </div>
        <button aria-label="microphone button para test de audio eye" onClick={openModal} className={styles.buttonMicrophone}>
          <Icon name="MICROPHONE" />
        </button>
      </form>
      <ModalMic
        isOpen={modalIsOpen}
        closeModal={closeModal}
        onChangedText={onChangedText}
      />
    </div>
  );
}

export default Search;
