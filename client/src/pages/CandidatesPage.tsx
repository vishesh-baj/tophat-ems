import { createColumnHelper } from "@tanstack/react-table";
import { startCase } from "lodash";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import EMS_CLIENT from "../api";
import { Table } from "../components";
import { ICandidates } from "../interfaces";
import { addCandidate } from "../slices/app/CandidateSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Close } from "../assets";

const columnHelper = createColumnHelper<ICandidates>();

const CandidatesPage = () => {
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
    columnHelper.accessor("personalEmail", {
      cell: (info) => info.getValue(),
      header: "Personal Email",
    }),
    columnHelper.accessor("primaryContactNumber", {
      cell: (info) => info.getValue(),
      header: "Primary Contact NUmber",
    }),
    columnHelper.accessor("currentLocation", {
      cell: (info) => info.getValue(),
      header: "Current Location",
    }),
    columnHelper.accessor("baseLocation", {
      cell: (info) => info.getValue(),
      header: "Base Location",
    }),
    columnHelper.accessor("readyToRelocate", {
      cell: (info) => (info.getValue() ? "READY" : "NOT READY"),
      header: "Date of Releiving",
    }),
    columnHelper.accessor("noticePeriod", {
      cell: (info) => info.getValue(),
      header: "Notice Period",
    }),
    columnHelper.accessor("currentCTC", {
      cell: (info) => info.getValue(),
      header: "Current CTC",
    }),

    columnHelper.accessor("expectedCTC", {
      cell: (info) => info.getValue(),
      header: "Expected CTC",
    }),
    columnHelper.accessor("communation", {
      cell: (info) => info.getValue(),
      header: "Communication",
    }),
    columnHelper.accessor("technology", {
      cell: (info) => info.getValue(),
      header: "Technology",
    }),
    columnHelper.accessor("experience", {
      cell: (info) => `${info.getValue()} Years`,
      header: "Experience",
    }),

    columnHelper.accessor("hrInCharge", {
      cell: (info) => info.getValue(),
      header: "HR in charge",
    }),
    columnHelper.accessor("status", {
      cell: (info) => (info.getValue() ? "STATUS PRESET" : "NO STATUS"),
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
    _id: yup.string(),
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
  const addCandidateModalRef = useRef<HTMLInputElement>(null);
  const editCandidateModalRef = useRef<HTMLInputElement>(null);
  const deleteCandidateModalRef = useRef<HTMLInputElement>(null);
  const [idToDelete, setIdToDelete] = useState<string>("");
  const getFormKeys = () =>
    Object.keys(data.length > 0 && data[0]).slice(1, 18);

  const handleEdit = (row: any) => {
    handleClose(editCandidateModalRef);
    reset(row);
    console.log("row", row, "Modal ref:", addCandidateModalRef.current);
  };

  const handleDelete = (row: any) => {
    handleClose(deleteCandidateModalRef);
    setIdToDelete(row._id);
  };

  const handleClose = (modalRef: any) => {
    if (modalRef.current) {
      modalRef.current.checked = !modalRef.current.checked;
      console.log("Checkbox is checked:", modalRef.current.checked);
    }
  };

  const fetchAllEmployees = async () => {
    const response = await EMS_CLIENT.get("get-all-candidates");
    dispatch(addCandidate(response.data.candidatesList));
  };
  const data = useSelector((state: any) => state.candidates);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onAddSubmit = async (data: FormData) => {
    const response = await EMS_CLIENT.post("add-candidate", data);
    alert(response.data);
    if (addCandidateModalRef.current) {
      addCandidateModalRef.current.checked =
        !addCandidateModalRef.current.checked;
      console.log("Checkbox is checked:", addCandidateModalRef.current.checked);
    }
  };
  const onEditSubmit = async (data: FormData) => {
    const response = await EMS_CLIENT.put(`edit-candidate/${data._id}`, data);
    console.log(response.data);
    handleClose(editCandidateModalRef);
  };
  const onDeleteSubmit = async () => {
    const response = await EMS_CLIENT.delete(`delete-candidate/${idToDelete}`);
    handleClose(deleteCandidateModalRef);
    console.log(response.data);
  };

  useEffect(() => {
    console.log("dataaa");
    console.log(() => getFormKeys());
    fetchAllEmployees();
  }, []);

  return (
    <div className="w-screen h-screen">
      <h1 className="text-center py-5 text-3xl">Candidate Dashboard</h1>
      <div className="flex justify-end py-4 mx-14">
        {/* TODO: ADD SEARCH INPUT */}

        <button
          onClick={() => handleClose(addCandidateModalRef)}
          className="btn btn-info"
        >
          Add Candidate
        </button>
      </div>
      <div className="overflow-x-auto mx-14">
        <Table tableColumns={columns} tableRows={data} />
      </div>
      {/* add employee modal trigger */}
      <input
        ref={addCandidateModalRef}
        type="checkbox"
        id="employee-modal_add"
        className="modal-toggle"
      />

      {/* add employee modal */}
      <div className="modal">
        <div className="modal-box">
          <div className="flex w-full justify-between">
            <h3 className="font-bold text-2xl ">Add Candidate</h3>
            <span onClick={() => handleClose(addCandidateModalRef)}>
              <Close className="h-6 w-6 cursor-pointer text-base-content" />
            </span>
          </div>
          {/* ADD EMPLOYEE FORM */}
          <form
            className="py-4 flex flex-col gap-4"
            onSubmit={handleSubmit(onAddSubmit)}
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
                <p className="text-rose-500 pt-4">
                  {errors[formInput]?.message}
                </p>
              </div>
            ))}
            <button type="submit" className="btn">
              add
            </button>
          </form>
        </div>
      </div>

      {/* edit employee modal trigger */}
      <input
        ref={editCandidateModalRef}
        type="checkbox"
        id="employee-modal_add"
        className="modal-toggle"
      />
      {/* edit employee modal */}
      <div className="modal">
        <div className="modal-box">
          <div className="flex w-full justify-between">
            <h3 className="font-bold text-2xl ">Edit Candidate</h3>
            <span onClick={() => handleClose(editCandidateModalRef)}>
              <Close className="h-6 w-6 cursor-pointer text-base-content" />
            </span>
          </div>
          {/* EDIT EMPLOYEE FORM */}
          <form
            className="py-4 flex flex-col gap-4"
            onSubmit={handleSubmit(onEditSubmit)}
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
                <p className="text-rose-500 pt-4">
                  {errors[formInput]?.message}
                </p>
              </div>
            ))}
            <button type="submit" className="btn">
              add
            </button>
          </form>
        </div>
      </div>

      {/* delete employee modal trigger */}
      <input
        ref={deleteCandidateModalRef}
        type="checkbox"
        id="employee-modal_add"
        className="modal-toggle"
      />

      {/* delete employee modal */}
      <div className="modal">
        <div className="modal-box">
          <div className="flex w-full justify-between">
            <h3 className="font-bold text-2xl ">Delete Candidate</h3>
            <span onClick={() => handleClose(deleteCandidateModalRef)}>
              <Close className="h-6 w-6 cursor-pointer text-base-content" />
            </span>
          </div>
          {/* DELETE EMPLOYEE Button */}
          <div className="flex flex-1 flex-col justify-center gap-5">
            <h2 className="">
              Are you sure you want to delete the selected entry?
            </h2>
            <div className="flex w-full flex-col justify-center gap-4 ">
              <button
                onClick={onDeleteSubmit}
                className="btn btn-outline btn-error"
              >
                Delete
              </button>
              <button
                onClick={() => handleClose(deleteCandidateModalRef)}
                className="btn btn-outline btn-success"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidatesPage;
