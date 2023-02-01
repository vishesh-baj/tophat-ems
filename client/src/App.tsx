import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage } from "./pages";
import { PATHS } from "./router/paths";
import { authRoutes, routes } from "./router/router";

const App = () => {
  return (
    <div className="body-default">
      <Routes>
        <Route path={PATHS.root} element={<Navigate to={PATHS.login} />} />
        <Route path={PATHS.login} element={<LoginPage />} />
      </Routes>
    </div>
  );
};
export default App;
