import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import EMS_CLIENT from "../api";
import { addEmployees } from "../slices/app/EmployeeSlice";

const EmployeesPage: FC = () => {
  const dispatch = useDispatch();
  const fetchAllEmployees = async () => {
    const response = await EMS_CLIENT.get("all-employees");
    console.log("RESPONSE: ", response.data.employeesList);
    dispatch(addEmployees(response.data.employeesList));
  };

  useEffect(() => {
    fetchAllEmployees();
  }, []);
  return <div>EmployeesPage</div>;
};

export default EmployeesPage;
