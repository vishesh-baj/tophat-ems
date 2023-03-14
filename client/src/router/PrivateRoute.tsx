import { decodeToken } from "react-jwt";
// import { useState, useEffect } from "react";

import { Outlet, Navigate } from "react-router-dom";
import { PATHS } from "../router/paths";

type tokenProps = {
  userId: string;
  role: string;
  iat?: number;
  exp?: number;
};

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  let auth = { token };
  const decodedToken = auth.token && decodeToken<tokenProps>(auth.token);

  return auth.token ? <Outlet /> : <Navigate to={PATHS.login} />;
};

export default PrivateRoute;
