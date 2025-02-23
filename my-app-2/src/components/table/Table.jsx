import styles from "./Table.module.scss";
import { Link } from "react-router-dom";
import FavButton from "./FavButton.jsx";

export const Table = ({
  handleSort,
  sortedData,
  favouriteIds,
  addToFavourites,
}) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th onClick={() => handleSort("id")}>ID</th>
          <th onClick={() => handleSort("name")}>Nazwa repozytorium</th>
          <th onClick={() => handleSort("owner.login")}>Właściciel</th>
          <th onClick={() => handleSort("stargazers_count")}>Ilość gwiazdek</th>
          <th onClick={() => handleSort("created_at")}>Data utworzenia</th>
          <th> Ulubione </th>
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
