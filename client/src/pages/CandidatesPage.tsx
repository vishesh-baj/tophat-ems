import { createColumnHelper } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EMS_CLIENT from "../api";
import { Table } from "../components";
import { ICandidates } from "../interfaces";
import { addEmployees } from "../slices/app/EmployeeSlice";
const columnHelper = createColumnHelper<ICandidates>();

const CandidatePage = () => {
  // TODO: Create edit and delete
  const handleEdit = (row: any) => {
    console.log("row", row);
  };

  const handleDelete = (row: any) => {
    console.log("row", row);
  };

  const dispatch = useDispatch();
  const fetchAllEmployees = async () => {
    const response = await EMS_CLIENT.get("all-employees");
    dispatch(addEmployees(response.data.employeesList));
  };

  const columns = [
    columnHelper.accessor("firstName", {
      cell: (info) => info.getValue(),
      header: "First Name",
    }),
    columnHelper.accessor("lastName", {
      cell: (info) => info.getValue(),
      header: "Last Name",
    }),

    columnHelper.accessor("personalEmail", {
      cell: (info) => info.getValue(),
      header: "Personal Email",
    }),
    columnHelper.accessor("primaryContactNumber", {
      cell: (info) => info.getValue(),
      header: "Primary Contact Number",
    }),
    columnHelper.accessor("currentLocation", {
      cell: (info) => info.getValue(),
      header: "Current Location",
    }),

    columnHelper.display({
      header: "Edit",
      cell: (props) => (
        <button
          onClick={() => handleEdit(props.row.original)}
          className="btn btn-success btn-sm"
        >
          Edit
        </button>
      ),
    }),
    columnHelper.display({
      header: "Delete",
      cell: (props) => (
        <button
          onClick={() => handleDelete(props.row.original)}
          className="btn btn-error btn-sm"
        >
          Delete
        </button>
      ),
    }),
  ];
  const data = useSelector((state: any) => state.employees);

  useEffect(() => {
    fetchAllEmployees();
  }, []);

  return (
    <div className="w-screen h-screen">
      <h1 className="text-center py-5 text-3xl">Employee Dashboard</h1>
      <div className="overflow-x-auto mx-14">
        <Table tableColumns={columns} tableRows={data} />
      </div>
    </div>
  );
};

export default CandidatePage;
