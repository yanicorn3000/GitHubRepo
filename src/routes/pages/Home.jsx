import { ReposList } from "./repoList/ReposList";
import styles from "./Home.module.scss";
const Home = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.title}>
        <span className={styles.house}></span>
        <h2>Strona Główna</h2>
      </div>

      <ReposList />
    </div>
  );
};

export default Home;
