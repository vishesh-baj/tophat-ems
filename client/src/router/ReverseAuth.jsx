import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { PATHS } from "../constants";

const ReverseAuthRoute = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  if (location.pathname === "/login" && token) {
    return <Navigate to={PATHS.dashboardHome} />;
  }
  return <Outlet />;
};

export default ReverseAuthRoute;
