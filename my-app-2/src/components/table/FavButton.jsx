import styles from "./FavButton.module.scss";

const FavButton = ({ favouriteIds, id, addToFavourites }) => {
  const isFavourite = favouriteIds.includes(id);

  return (
    <button
      className={styles.tableButton}
      onClick={() => addToFavourites(id)}
      disabled={isFavourite}
    >
      {isFavourite ? "Dodano" : "Dodaj"}
      <span className={isFavourite ? styles.check : styles.plus}></span>
    </button>
  );
};

export default FavButton;
