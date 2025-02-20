import styles from "./Buttons.module.scss";
export const Buttons = ({ page, setPage, totalPages }) => {
  return (
    <div className={styles.buttonsContainer}>
      <button
        className={styles.button}
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
      >
        <span className={styles.chevronLeft}></span>
      </button>

      <div>
        <span className={styles.pageCount}>
          Strona {page} z {totalPages}
        </span>
      </div>
      <button
        className={styles.button}
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={page === totalPages}
      >
        <span className={styles.chevronRight}></span>
      </button>
    </div>
  );
};
