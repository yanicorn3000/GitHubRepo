import { useParams } from "react-router-dom";
import { useRepoById } from "../../../api/repo";
import styles from "./RepoDetails.module.scss";
import Spinner from "../../../components/spinner/Spinner";
export const RepoDetails = () => {
  const { repoId } = useParams();
  const { data, isLoading, error } = useRepoById(repoId);

  if (isLoading) return <Spinner />;
  if (error) return <p>Błąd: {error.message}</p>;

  return (
    <div className={styles.repoContainer}>
      <div className={styles.info}>
        <h2>{data?.name}</h2>
        <div className={styles.userInfo}>
          <span className={styles.userName}>by {data.owner?.login}</span>
          <img
            src={data.owner?.avatar_url}
            alt={data.owner?.login}
            className={styles.avatar}
          />
        </div>
      </div>
      <p>{data.description}</p>

      <div className={styles.widgetsContainer}>
        <div className={styles.widget}>
          <span className={styles.link}></span>{" "}
          <a href={data.html_url} target="_blank" rel="noopener noreferrer">
            URL
          </a>
        </div>

        <div className={styles.widget}>
          <span className={styles.star}></span>
          <p>{data.stargazers_count}</p>
        </div>

        <div className={styles.widget}>
          <span className={styles.date}></span>
          <p> {new Date(data.created_at).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};
