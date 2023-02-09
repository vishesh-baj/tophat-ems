import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage } from "./pages";
import { PATHS } from "./router/paths";
import ProtectedRoute from "./router/ProtectedRoutes";
import { authRoutes, routes } from "./router/router";
const App = () => {
  return (
    // to be routed to when logged in
    <div className="body-default">
      <Routes>
        {/* {routes.map((authRoute) => {
          <Route
            element={<authRoute.Element />}
            path={authRoute.path}
            key={authRoute.key}
          />;
        })} */}
        <Route path={PATHS.root} element={<Navigate to={PATHS.login} />} />
        <Route path={PATHS.login} element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
