import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.notFoundcontainer}>
      <h1>404</h1>
      <p>Strona nie została znaleziona!</p>
      <Link to="/">Wróć na stronę główną</Link>
    </div>
  );
};

export default NotFound;
