import { FC, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addrequest } from "../slices/app/HrSlice";
import { useDispatch } from "react-redux";

const HrEmployeePage: FC = () => {
  const [alls, setAlls] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useRef("true");
  const handlePage = () => {
    const reqs: string | null = prompt("Please enter your request");
    console.log(reqs);
    setAlls(reqs);
    dispatch(addrequest(reqs));
    if (state.current == "false") {
      navigate("/employees");
    }
  };

  return (
    <div>
      <h1>HrEmployeePage</h1>
      <button
        onClick={() => {
          handlePage();
        }}
      >
        request
      </button>
      {/* <h1>{alls}</h1> */}
    </div>
  );
};

export default HrEmployeePage;
