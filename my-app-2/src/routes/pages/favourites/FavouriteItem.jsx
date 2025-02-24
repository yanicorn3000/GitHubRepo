import { Link } from "react-router-dom";
import { useRepoById } from "../../../api/repo";
import styles from "./FavouriteItem.module.scss";
import Spinner from "../../../components/spinner/Spinner";

const FavouriteItem = ({ repoId, removeFromFavourites }) => {
  const { data, isLoading, error } = useRepoById(repoId);

  if (isLoading) return <Spinner />;
  if (error) return <p>Błąd: {error.message}</p>;
  if (!data) return <p>Brak danych dla repozytorium {repoId}.</p>;

  return (
    <li className={styles.item}>
      <div className={styles.details}>
        <span className={styles.folder}></span>
        <h3>
          <Link to={`/repositories/${data.id}`}>{data?.name}</Link>
        </h3>

        <p className={styles.info}>Właściciel: {data.owner?.login}</p>
        <p className={styles.info}>{data.stargazers_count} gwiazdek</p>
      </div>

      <button
        className={styles.remove}
        onClick={() => removeFromFavourites(repoId)}
      >
        Usuń <span className={styles.xmark}></span>
      </button>
    </li>
  );
};

export default FavouriteItem;
