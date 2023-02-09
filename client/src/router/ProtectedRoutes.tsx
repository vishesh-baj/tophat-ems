import React, { useContext } from "react";
import { decodeToken, isExpired } from "react-jwt";
import { Route, RouteProps, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import {
  AdminDashboardLayout,
  DevDashboardLayout,
  HrDashboardLayout,
} from "../layout";
// added routeProps
type Props = {
  token: string;
};

const ProtectedRoute: React.FC<Props> = ({ token }) => {
  const decodedToken: any = decodeToken(token);
  console.log(decodedToken);
  const { authToken } = useContext(AppContext);
  const navigate = useNavigate();

  if (!token || token !== authToken) {
    navigate("/login");
    return null;
  }

  if (decodedToken.role === "admin") {
    return <Route element={<AdminDashboardLayout />} />;
  }

  if (decodedToken.role === "hr") {
    return <Route element={<HrDashboardLayout />} />;
  }
  if (decodedToken.role === "dev") {
    return <Route element={<DevDashboardLayout />} />;
  }
  navigate("/");
  return null;
};

export default ProtectedRoute;
