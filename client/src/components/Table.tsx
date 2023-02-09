import React, { useMemo } from "react";
import { useTable } from "react-table";
import { employees } from "../interfaces/employees.interface";
type Props = {
  data: employees[];
};

const Table = (props: Props) => {
  const data = useMemo(() => props.data, [props.data]);
  // columns specifics to the table
  const columns = [
    {
      Header: "Column 1",
      accessor: "col1", // accessor is the "key" in the data
    },
    {
      Header: "Column 2",
      accessor: "col2",
    },
  ];

  const { getTableProps, getTableBodyProps, prepareRow, headerGroups, rows } =
    useTable({ columns, data });
  return (
    <div className="overflow-x-auto">
      <table className="table" {...getTableProps()}>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
