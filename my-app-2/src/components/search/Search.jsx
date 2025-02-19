import { useState, useEffect } from "react";
import styles from "./Search.module.scss";
export const Search = ({ query, setQuery, totalPages, page }) => {
  const [inputValue, setInputValue] = useState(query);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setQuery(inputValue);
    }, 500);

    return () => clearTimeout(timeout);
  }, [inputValue, setQuery]);
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchInputWrapper}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Wpisz nazwę repozytorium..."
          className={styles.searchInput}
        />
        <span className={styles.searchIcon}></span>
      </div>
      <div>
        <span className={styles.pageCount}>
          Strona {page} z {totalPages}
        </span>
      </div>
    </div>
  );
};
