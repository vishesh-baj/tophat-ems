import { FC } from "react";
import { useEffect, useState } from "react";
import { IAttendance } from "../interfaces";

import EMS_CLIENT from "../api";
import { Table } from "../components";
import { createColumnHelper } from "@tanstack/react-table";
type Props = {};
const columnHelper = createColumnHelper<IAttendance>();

const ReportsPage = (props: Props) => {
  const [datas, setDatas] = useState([]);

  const columns = [
    columnHelper.accessor("_id", {
      cell: (info: any) => info.getValue(),
      header: " _id?",
    }),
    columnHelper.accessor("employeeId", {
      cell: (info) => info.getValue(),
      header: "Last Name",
    }),
    columnHelper.accessor("date", {
      cell: (info: any) => info.getValue(),
      header: "date",
    }),
    columnHelper.accessor("status", {
      cell: (info: any) => info.getValue(),
      header: "Primary Contact NUmber",
    }),
  ];
  const fetchAllAttendence = async () => {
    const response = await EMS_CLIENT.get("all-attendence");
    setDatas(response.data);
  };
  useEffect(() => {
    fetchAllAttendence();
  }, []);

  return (
    <div>
      <Table tableColumns={columns} tableRows={datas} />
    </div>
  );
};

export default ReportsPage;
