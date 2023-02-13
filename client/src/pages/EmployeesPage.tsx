import { createColumnHelper } from "@tanstack/react-table";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EMS_CLIENT from "../api";
import { Table } from "../components";
import { IEmployees } from "../interfaces";
import { addEmployees } from "../slices/app/EmployeeSlice";
const columnHelper = createColumnHelper<IEmployees>();

const EmployeesPage = () => {
  const checkboxRef = useRef<HTMLInputElement>(null);
  // TODO: Create edit and delete
  const handleEdit = (row: any) => {
    // console.log("row", row, "Modal ref:", modalRef.current);
    if (checkboxRef.current) {
      checkboxRef.current.checked = !checkboxRef.current.checked;
      console.log("Checkbox is checked:", checkboxRef.current.checked);
    }
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
    columnHelper.accessor("department", {
      cell: (info) => info.getValue(),
      header: "Department",
    }),
    columnHelper.accessor("designation", {
      cell: (info) => info.getValue(),
      header: "Department",
    }),
    columnHelper.accessor("dateOfBirth", {
      cell: (info) => info.getValue(),
      header: "Date of Birth",
    }),
    columnHelper.accessor("dateOfJoining", {
      cell: (info) => info.getValue(),
      header: "Date of Joining",
    }),
    columnHelper.accessor("dateOfReleiving", {
      cell: (info) => (info.getValue() ? info.getValue() : "no entry"),
      header: "Date of Releiving",
    }),
    columnHelper.accessor("documents", {
      cell: (info) =>
        info.getValue().length !== 0
          ? info.getValue()
          : "no documents submitted",
      header: "Documents",
    }),
    columnHelper.accessor("experience", {
      cell: (info) => info.getValue(),
      header: "Experience",
    }),
    columnHelper.accessor("officialEmail", {
      cell: (info) => info.getValue(),
      header: "Official Mail",
    }),
    columnHelper.accessor("personalEmail", {
      cell: (info) => info.getValue(),
      header: "Personal Email",
    }),
    columnHelper.accessor("primaryAddress", {
      cell: (info) => info.getValue(),
      header: "Primary Address",
    }),
    columnHelper.accessor("secondaryAddress", {
      cell: (info) => info.getValue(),
      header: "Secondary Address",
    }),
    columnHelper.accessor("primaryContactNumber", {
      cell: (info) => info.getValue(),
      header: "Primary Contact Number",
    }),
    columnHelper.accessor("secondaryContactNumber", {
      cell: (info) => info.getValue(),
      header: "Secondary Contact Number",
    }),
    columnHelper.accessor("role", {
      cell: (info) => info.getValue(),
      header: "Role",
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
      {/* Put this part before </body> tag */}
      <input
        ref={checkboxRef}
        type="checkbox"
        id="employee-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="employee-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeesPage;
