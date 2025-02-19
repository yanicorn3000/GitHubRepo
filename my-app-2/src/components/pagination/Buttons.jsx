import styles from "./Buttons.module.scss";
export const Buttons = () => {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.button}>
        <span className={styles.chevronLeft}></span>Poprzednia
      </button>
      <button className={styles.button}>
        Następna<span className={styles.chevronRight}></span>
      </button>
    </div>
  );
};
