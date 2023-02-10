import React, { FC, useEffect, useState } from "react";
import EMS_CLIENT from "../api";
const EmployeesPage: FC = () => {
  const [employeesList, setEmployeesList] = useState();
  const fetchAllEmployees = async () => {
    const response = await EMS_CLIENT.get("all-employees");

    setEmployeesList(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchAllEmployees();
  }, []);
  return <div>EmployeesPage</div>;
};

export default EmployeesPage;
