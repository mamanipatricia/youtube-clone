import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ModalMic } from "../UI/Modal/ModalMic";
import Icon from "../Icon/Icon";
import styles from "./Search.module.css";

function Search() {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchQuery = query.get("search_query");

  const [keyword, setKeyword] = useState(searchQuery || "");

  const [modalIsOpen, setIsOpen] = useState(false);

  const searchHandle = (event) => {
    setKeyword(event.target.value);
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

  function afterOpenModal() {
    return null;
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles.formWrapper}>
      <form style={{ display: "flex" }} onSubmit={onSubmit}>
        <div className={styles.searchContainer}>
          <input
            value={keyword}
            onChange={(e) => searchHandle(e)}
            className={styles.searchInput}
            placeholder="Search"
          />
        </div>
        <button className={styles.searchButton}>
          <Icon name="SEARCH" />
        </button>
        <button onClick={openModal} className={styles.buttonMicrophone}>
          <Icon name="MICROPHONE" />
        </button>
      </form>
      <ModalMic
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      />
    </div>
  );
}

export default Search;
