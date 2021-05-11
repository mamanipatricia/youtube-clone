import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";
import Icon from "../Icon/Icon";
import { useHistory, useLocation } from "react-router-dom";

function Search() {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchQuery = query.get("search_query");

  const [keyword, setKeyword] = useState(searchQuery || "");

  const searchHandle = (event) => {
    setKeyword(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    history.push({ pathname: `/results`, search: `?search_query=${keyword}` });
  };

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
          <Icon name="SEARCH" width="20px" height="20px" />
        </button>
        <button className={styles.buttonMicrophone}>
          <Icon name="MICROPHONE" />
        </button>
      </form>
    </div>
  );
}

export default Search;
