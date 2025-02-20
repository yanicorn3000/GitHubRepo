import styles from "./Table.module.scss";
import { useRepos } from "../../api/repo";
import { useState, useMemo } from "react";
import { Search } from "../search/Search";
import { Buttons } from "../pagination/Buttons";
import { Select } from "../pagination/Select";

export const Table = () => {
  const [query, setQuery] = useState("");
  const { data, isLoading, error } = useRepos(query);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const currentData = useMemo(() => {
    if (!data) {
      return [];
    }
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    return data.items.slice(startIndex, endIndex);
  }, [page, limit, data]);

  const totalPages = data ? Math.ceil(data.items.length / limit) : 0;

  const sortedData = [...currentData].sort((a, b) => {
    if (!sortedColumn) return 0;

    let valueA = a[sortedColumn];
    let valueB = b[sortedColumn];

    if (sortedColumn === "owner.login") {
      valueA = a.owner.login;
      valueB = b.owner.login;
    }

    if (typeof valueA === "string") {
      return sortDirection === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    } else {
      return sortDirection === "asc" ? valueA - valueB : valueB - valueA;
    }
  });

  const handleSort = (column) => {
    if (sortedColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortedColumn(column);
      setSortDirection("asc");
    }
  };

  return (
    <>
      <div className={styles.mainPage}>
        <span className={styles.house}></span>
        <h1>Strona Główna</h1>
      </div>

      <Search
        query={query}
        setQuery={setQuery}
        totalPages={totalPages}
        page={page}
      />

      <div className={styles.tableContainer}>
        {isLoading && <p>Łoading...</p>}
        {error && <p>Error: {error.message}</p>}

        {sortedData?.length > 0 ? (
          <>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th onClick={() => handleSort("id")}>ID</th>
                  <th onClick={() => handleSort("name")}>Nazwa repozytorium</th>
                  <th onClick={() => handleSort("owner.login")}>Właściciel</th>
                  <th onClick={() => handleSort("stargazers_count")}>
                    Ilość gwiazdek
                  </th>
                  <th onClick={() => handleSort("created_at")}>
                    Data utworzenia
                  </th>
                  <th> Ulubione </th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <div className={styles.owner}>
                        <img
                          className={styles.avatar}
                          src={item.owner.avatar_url}
                        />
                        {item.owner.login}
                      </div>
                    </td>
                    <td>{item.stargazers_count}</td>
                    <td>{new Date(item.created_at).toLocaleDateString()}</td>
                    <td>
                      <button className={styles.tableButton}>Dodaj</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Select setLimit={setLimit} limit={limit} setPage={setPage} />
            <Buttons page={page} setPage={setPage} totalPages={totalPages} />
          </>
        ) : (
          !isLoading && null
        )}
      </div>
    </>
  );
};
