import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages";
import { PATHS } from "./router/paths";
import { EmployeesPage, CandidatesPage } from "./pages";
import { DevDashboardLayout } from "./layout";
import PrivateRoute from "./router/PrivateRoute";
import ReverseAuthRoute from "./router/ReverseAuthRoute";
import SuperAdminPage from "./pages/SuperAdminPage";

const App = () => {
  return (
    <div className="body-default">
      <Routes>
        {/* employee page route */}
        <Route element={<PrivateRoute />}>
          <Route element={<EmployeesPage />} path={PATHS.employees} />
        </Route>

        {/* candidate page route */}
        <Route element={<PrivateRoute />}>
          <Route element={<CandidatesPage />} path={PATHS.candidates} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route element={<SuperAdminPage />} path={PATHS.superAdminPage} />
        </Route>

        {/* dev dashboard layout route */}
        <Route
          path={PATHS.devDashbnoard}
          element={<DevDashboardLayout />}
          key={PATHS.devDashbnoard}
        />
        {/* login */}
        <Route element={<ReverseAuthRoute />}>
          <Route element={<LoginPage />} path={PATHS.login} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
