import styles from "./App.module.scss";
import { Table } from "./components/table/Table";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.container}>
        <Table />
      </div>
    </QueryClientProvider>
  );
};

export default App;
