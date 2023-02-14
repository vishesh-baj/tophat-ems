import { createColumnHelper } from "@tanstack/react-table";
import { startCase } from "lodash";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import EMS_CLIENT from "../api";
import { Table } from "../components";
import { IEmployees } from "../interfaces";
import { addEmployees } from "../slices/app/EmployeeSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const columnHelper = createColumnHelper<IEmployees>();

const EmployeesPage = () => {
  // TODO: fetch associatedHrId from token and pass instead of static string value
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
        // VALUE SHOULD BE ARRAY IN FUTURE
        info.getValue() ? info.getValue() : "no documents submitted",
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
  const schema = yup.object({
    firstName: yup.string().required("first name is required"),
    lastName: yup.string().required("last name is required"),
    primaryContactNumber: yup
      .string()
      .required("contact number is required")
      .min(10, "enter valid contact number"),
    secondaryContactNumber: yup
      .string()
      .required("secondary contact is required")
      .min(10, "enter valid contact number"),
    primaryAddress: yup
      .string()
      .required("primary address is required")
      .max(250, "cannot exceed 250 characters"),
    secondaryAddress: yup
      .string()
      .required("secondary address is required")
      .max(250, "cannot exceed 250 characters"),
    officialEmail: yup
      .string()
      .email("enter valid email")
      .required("email is required"),
    personalEmail: yup
      .string()
      .email("enter valid email")
      .required("personal email is required"),
    dateOfBirth: yup.string().required("date of birth is required"),
    designation: yup.string().required("designation is required"),
    department: yup.string().required("department is required"),
    experience: yup.string().required("experience is required"),
    dateOfJoining: yup.string().required("date of joining is required"),
    role: yup.string().required("role is required"),
    permissions: yup.string().required("permissions are required"),
    associatedUserId: yup.string(),
  });

  type FormData = yup.InferType<typeof schema>;
  const dispatch = useDispatch();
  const checkboxRef = useRef<HTMLInputElement>(null);
  const getFormKeys = () =>
    Object.keys(data.length > 0 && data[0]).slice(1, 18);

  const handleEdit = (row: any) => {
    console.log("row", row, "Modal ref:", checkboxRef.current);
  };

  const handleDelete = (row: any) => {
    console.log("row", row);
  };
  const handleAddEmployee = (row: any) => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = !checkboxRef.current.checked;
      console.log("Checkbox is checked:", checkboxRef.current.checked);
    }
  };
  const fetchAllEmployees = async () => {
    const response = await EMS_CLIENT.get("all-employees");
    dispatch(addEmployees(response.data.employeesList));
  };
  const data = useSelector((state: any) => state.employees);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data: FormData) => {
    const response = await EMS_CLIENT.post("add-employee", data);
    alert(response.data);
    if (checkboxRef.current) {
      checkboxRef.current.checked = !checkboxRef.current.checked;
      console.log("Checkbox is checked:", checkboxRef.current.checked);
    }
  };

  useEffect(() => {
    fetchAllEmployees();
  }, []);

  return (
    <div className="w-screen h-screen">
      <h1 className="text-center py-5 text-3xl">Employee Dashboard</h1>
      <div className="overflow-x-auto mx-14">
        <button onClick={handleAddEmployee} className="btn btn-info">
          Add Employee
        </button>
        <Table tableColumns={columns} tableRows={data} />
      </div>
      {/* Put this part before </body> tag */}
      <input
        ref={checkboxRef}
        type="checkbox"
        id="employee-modal_add"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-2xl ">Add Employee</h3>
          <form
            className="py-4 flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {getFormKeys().map((formInput) => (
              <div key={formInput} className="form-control">
                <input
                  {...register(formInput)}
                  name={formInput}
                  placeholder={startCase(formInput)}
                  className="input input-primary"
                  type="text"
                />
                <p className="text-rose-500">{errors[formInput]?.message}</p>
              </div>
            ))}

            <button type="submit" className="btn">
              add
            </button>
          </form>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeesPage;
