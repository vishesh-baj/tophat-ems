import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Allrequests = () => {
  const data = useSelector((state: any) => state.hr);
  console.log("gwrwfpowhgoiujjhgoi", data);
  const handleApprove = () => {
    console.log("accept");
  };

  const handleReject = () => {
    console.log("reject");
  };
  return (
    <div>
      Allrequests
      <div>{data}</div>
      <button
        onClick={() => {
          handleApprove();
        }}
      >
        Accept
      </button>
      <button
        onClick={() => {
          handleReject();
        }}
      >
        Reject
      </button>
    </div>
  );
};

export default Allrequests;
