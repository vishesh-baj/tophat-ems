export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  console.log("manish puri g", { filterValue });
  return (
    <span>
      Search:{" "}
      <input
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};
