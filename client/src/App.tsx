import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { DashboardPage, LoginPage } from "./pages";
import { PATHS } from "./router/paths";
import { useEffect, useState } from "react";
import React from "react";
import { AdminDashboardLayout } from "./layout";
import PrivateRoute from "./router/PrivateRoute";
import ReverseAuthRoute from "./router/ReverseAuthRoute";
const App = () => {
  return (
    <div className="body-default">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route
            element={<AdminDashboardLayout />}
            path={PATHS.adminDashboard}
          />
        </Route>
        <Route element={<ReverseAuthRoute />}>
          <Route element={<LoginPage />} path={PATHS.login} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
