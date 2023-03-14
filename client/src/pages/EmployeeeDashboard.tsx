import React, { useState } from "react";

const EmployeeeDashboard = () => {
  const [login, setLogIn] = useState<any>("");
  const [logout, setLogOut] = useState<any>("");
  const [breakIn, setBreakIn] = useState<any>("");
  const [breakout, setBreakOut] = useState<any>();
  const [teaIn, setTeaIn] = useState<any>("");
  const [teaOut, setTeaOut] = useState<any>("");
  const handleIn = () => {
    const date = new Date();
    const showTime = Number(
      date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      })
    );
    setLogIn(showTime);
  };
  const handleOut = () => {
    const date = new Date();
    const showTime = date.toLocaleString("en-GB", {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    });
    setLogOut(showTime);
  };

  const handleBreakIn = () => {
    const date = new Date();
    const showTime = date.toLocaleString("en-GB", {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    });
    setBreakIn(showTime);
  };
  const handleBreakOut = () => {
    const date = new Date();
    const showTime = date.toLocaleString("en-GB", {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    });
    setBreakOut(showTime);
  };
  const handleTeaBreakIn = () => {
    const date = new Date();
    const showTime = date.toLocaleString("en-GB", {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    });
    setTeaIn(showTime);
  };
  const handleTeaBreakOut = () => {
    const date = new Date();
    const showTime = Number(
      date.toLocaleString("en-GB", {
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      })
    );
    setTeaOut(showTime);
  };

  //console.log(typeof login);
  //   const fg = parseInt(login);
  //   console.log({ fg });
  //   let Datte = new Date();
  //   let H = Datte.getHours();
  //   let m = Datte.getMinutes();
  //   console.log(H, m);
  return (
    <div>
      <h1>EmployeeeDashboard</h1>
      <h2>{login}</h2>
      <button onClick={handleIn}>LogIn</button>
      <h2>{breakIn}</h2>
      <button onClick={handleBreakIn}>BreakIn</button>
      <h2>{breakout}</h2>
      <button onClick={handleBreakOut}>BreakOut</button>
      <h2>{teaIn}</h2>
      <button onClick={handleTeaBreakIn}>TeaBreakIn</button>
      <h2>{teaOut}</h2>
      <button onClick={handleTeaBreakOut}>TeaBreakOut</button>
      <h2>{logout}</h2>
      <button onClick={handleOut}>LogOut</button>
    </div>
  );
};

export default EmployeeeDashboard;
