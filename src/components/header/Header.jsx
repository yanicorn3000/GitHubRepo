import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
  const location = useLocation();
  const isFavouritesActive = location.pathname === "/favourites";
  const isHomeActive = location.pathname === "/";

  return (
    <nav className={styles.navBar}>
      <ul className={styles.linksContainer}>
        <li className={styles.link}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Strona główna
            <span
              className={isHomeActive ? styles.fullHouse : styles.house}
            ></span>
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink
            to="/favourites"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Ulubione
            <span
              className={isFavouritesActive ? styles.fullHeart : styles.heart}
            ></span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
