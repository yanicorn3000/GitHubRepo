export const Select = ({ limit, setLimit, setPage }) => {
  return (
    <>
      <div>
        <label>Wyników na stronę:</label>
        <select
          value={limit}
          onChange={(e) => {
            setLimit(Number(e.target.value));
            setPage(1); // Reset do pierwszej strony po zmianie limitu
          }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
    </>
  );
};
