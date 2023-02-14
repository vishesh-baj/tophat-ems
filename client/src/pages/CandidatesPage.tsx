import { createColumnHelper } from "@tanstack/react-table";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import EMS_CLIENT from "../api";
import { Table } from "../components";
import { ICandidates } from "../interfaces";
import { addCandidate } from "../slices/app/CandidateSlice";

const columnHelper = createColumnHelper<ICandidates>();

const CandidatesPage = () => {
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
    const response = await EMS_CLIENT.get("get-all-candidates");
    dispatch(addCandidate(response.data.candidatesList));
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

  const data = useSelector((state: any) => state);

  useEffect(() => {
    fetchAllEmployees();
  }, []);

  return (
    <div className="w-screen h-screen">
      <h1 className="text-center py-5 text-3xl">Candidate Dashboard</h1>
      <div className="overflow-x-auto mx-14">
        <button className="btn btn-primary">Add Candidate</button>
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

export default CandidatesPage;
