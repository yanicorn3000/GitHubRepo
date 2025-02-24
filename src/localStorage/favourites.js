import { useState, useEffect, useCallback } from "react";
import { createRepoLSKey } from "../api/repo";

const getFavourites = () => {
  return JSON.parse(localStorage.getItem("favourites")) || [];
};

const saveFavourites = (favourites) => {
  localStorage.setItem("favourites", JSON.stringify(favourites));
};

export const useFavourites = () => {
  const [favouriteIds, setFavouriteIds] = useState(getFavourites);

  useEffect(() => {
    saveFavourites(favouriteIds);
  }, [favouriteIds]);

  const addToFavourites = useCallback((repoId) => {
    setFavouriteIds((favouriteIds) => {
      if (!favouriteIds.includes(repoId)) {
        return [...favouriteIds, repoId];
      }
      return favouriteIds;
    });
  }, []);

  const removeFromFavourites = useCallback((repoId) => {
    localStorage.removeItem(createRepoLSKey(repoId));
    setFavouriteIds((favouriteIds) =>
      favouriteIds.filter((id) => id !== repoId)
    );
  }, []);

  return { favouriteIds, addToFavourites, removeFromFavourites };
};
