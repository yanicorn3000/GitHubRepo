import { Header } from "../components/header/Header";
import styles from "../App.module.scss";

const Layout = (props) => {
  return (
    <>
      <Header />
      <div className={styles.container}>{props.children}</div>
    </>
  );
};

export default Layout;
