import React, { useContext } from "react";
import { Route, Navigate, RouteProps } from "react-router-dom";
import AppContext from "../context/AppContext";

interface Props extends RouteProps {
  component: React.ElementType;
}

const ProtectedRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const { token } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => (token ? <Component {...props} /> : <Navigate />)}
    />
  );
};

export default ProtectedRoute;
