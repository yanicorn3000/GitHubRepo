import { useState, useEffect } from "react";
import styles from "./Search.module.scss";
export const Search = ({ query, setQuery }) => {
  const [inputValue, setInputValue] = useState(query);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setQuery(inputValue);
    }, 500);

    return () => clearTimeout(timeout);
  }, [inputValue, setQuery]);
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type repository name"
        className={styles.searchInput}
      />
    </div>
  );
};
