import React, { useContext } from "react";
import { Route, RouteProps, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import {
  AdminDashboardLayout,
  DevDashboardLayout,
  HrDashboardLayout,
} from "../layout";

// added routeProps
type Props = RouteProps {
  token: string;
  userObject: {
    role: string;
  };
}




const ProtectedRoute: React.FC<Props> = ({ token, userObject, ...rest }) => {
  const { authToken } = useContext(AppContext);
  const navigate = useNavigate();

  if (!token || token !== authToken) {
    navigate("/login");
    return null;
  }

  if (userObject.role === "admin") {
    return <Route {...rest} component={AdminDashboardLayout} />;
  }

  if (userObject.role === "hr") {
    return <Route {...rest} component={HrDashboardLayout} />;
  }

  navigate("/");
  return null;
};

export default ProtectedRoute;

