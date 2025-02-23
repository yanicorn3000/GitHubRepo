import { useFavourites } from "../../../localStorage/favourites";
import FavouriteItem from "./FavouriteItem";
import styles from "./Favourites.module.scss";

export const Favourites = () => {
  const { favouriteIds, removeFromFavourites } = useFavourites();

  return (
    <div className={styles.favouritesContainer}>
      <h2>Ulubione</h2>
      {favouriteIds.length === 0 ? (
        <p>Brak ulubionych repozytoriów.</p>
      ) : (
        <ul className={styles.favourites}>
          {favouriteIds.map((repoId) => (
            <FavouriteItem
              key={repoId}
              repoId={repoId}
              removeFromFavourites={removeFromFavourites}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
