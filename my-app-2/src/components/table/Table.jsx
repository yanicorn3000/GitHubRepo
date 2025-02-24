import styles from "./Table.module.scss";
import { Link } from "react-router-dom";
import FavButton from "./FavButton.jsx";

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Nazwa repozytorium" },
  { key: "owner.login", label: "Właściciel" },
  { key: "stargazers_count", label: "Ilość gwiazdek" },
  { key: "created_at", label: "Data utworzenia" },
];

export const Table = ({
  handleSort,
  sortedData,
  favouriteIds,
  addToFavourites,
  sortDirection,
  sortedColumn,
}) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map(({ key, label }) => (
            <th key={key} onClick={() => handleSort(key)}>
              {label}
              {sortedColumn === key && (sortDirection === "asc" ? " ▲" : " ▼")}
            </th>
          ))}
          <th>Ulubione</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>
              <Link to={`/repositories/${item.id}`}>{item.name}</Link>
            </td>
            <td>
              <div className={styles.owner}>
                <img className={styles.avatar} src={item.owner.avatar_url} />
                {item.owner.login}
              </div>
            </td>
            <td>{item.stargazers_count}</td>
            <td>{new Date(item.created_at).toLocaleDateString()}</td>
            <td>
              <FavButton
                favouriteIds={favouriteIds}
                id={item.id}
                addToFavourites={addToFavourites}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
