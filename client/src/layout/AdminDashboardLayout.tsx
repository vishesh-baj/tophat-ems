import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const AdminDashboardLayout = (props: Props) => {
  return (
    <div className="bg-black  w-full h-96">
      <div className="m-4">
        <h1 className="text-white text-2xl">AdminDashboardLayout</h1>
        <NavLink to="/dashboard/employee-dashboard">
          <button className="btn btn-outline btn-accent text-xl">
            Employee-Dashboard
          </button>
        </NavLink>
        <NavLink to="/dashboard/candidate-dashboard">
          <button className="btn btn-outline btn-accent text-xl m-4">
            Candidate-Dashboard
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
