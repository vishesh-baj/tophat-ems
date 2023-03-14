import { decodeToken } from "react-jwt";
// import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
//import { Navigate } from "react-router-dom";

import { Outlet } from "react-router-dom";
import { PATHS } from "../router/paths";
type tokenProps = {
  userId: string;
  role: string;
  iat?: number;
  exp?: number;
};

const RoleRoute = () => {
  const navigate = useNavigate();
  const token: string = JSON.stringify(localStorage.getItem("token"));
  console.log("token", token);
  let auth: string | boolean = token;
  const decodedToken: tokenProps | null = decodeToken(auth);
  const role = decodedToken?.role;
  console.log("ROLE:", role);
  //   conditionally render routes
  const userKnow = () => {
    switch (role) {
      case "bde":
        navigate(PATHS.employees);
        break;
      case "hr":
        navigate(PATHS.employees);
        break;
      case "dev":
        navigate(PATHS.superAdminPage);
        break;

      default:
        return navigate(PATHS.login);
    }
  };
  useEffect(() => {
    userKnow();
  }, []);
};
//auth.token ? <Outlet /> : navigate(PATHS.login)

// return auth ? <Outlet /> : <Navigate to={PATHS.login} />;

export default RoleRoute;
