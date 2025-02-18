import styles from "./Table.module.scss";
import { useRepos } from "../../api/repo";
import { useState } from "react";
import { Search } from "../search/Search";

export const Table = () => {
  const [query, setQuery] = useState("");
  const { data, isLoading, error } = useRepos(query);

  return (
    <>
      <Search query={query} setQuery={setQuery} />

      <div className={styles.tableContainer}>
        {isLoading && <p>Łoading...</p>}
        {error && <p>Error: {error.message}</p>}

        {data?.items?.length > 0 ? (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nazwa repozytorium</th>
                <th>Właściciel</th>
                <th> Ilość gwiazdek</th>
                <th> Data utworzenia</th>
                <th> Ulubione </th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.owner.login}</td>
                  <td>{item.stargazers_count}</td>
                  <td>{new Date(item.created_at).toLocaleDateString()}</td>
                  <td>
                    <button className={styles.tableButton}>Dodaj</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          !isLoading && null
        )}
      </div>
    </>
  );
};
