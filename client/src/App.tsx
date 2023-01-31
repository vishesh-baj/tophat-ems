import { Route, Routes } from "react-router-dom";
import { PATHS } from "./router/paths";
import { authRoutes, routes } from "./router/router";

const App = () => {
  return (
    <div className="body-default">
      <h1 className="">TOPHAT EMS - TYPESCRIPT</h1>
      <Routes>
        {authRoutes.map((authRoute) => {
          <Route
            path={authRoute.path}
            element={<authRoute.Element />}
            key={authRoute.key}
          />;
        })}
      </Routes>
    </div>
  );
};
export default App;
