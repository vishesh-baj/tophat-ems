import { Outlet, Navigate } from "react-router-dom";
import { PATHS } from "../router/paths";
const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  console.log(token);

  let auth = { token };
  return auth.token ? <Outlet /> : <Navigate to={PATHS.login} />;
};
export default PrivateRoute;
