import styles from "./Select.module.scss";
export const Select = ({ limit, setLimit, setPage }) => {
  return (
    <>
      <div className={styles.selectContainer}>
        <label>Wyników na stronie:</label>
        <select
          value={limit}
          onChange={(e) => {
            setLimit(Number(e.target.value));
            setPage(1);
          }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={30}>30</option>
        </select>
      </div>
    </>
  );
};
