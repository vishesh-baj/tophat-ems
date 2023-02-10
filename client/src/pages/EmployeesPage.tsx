import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EMS_CLIENT from "../api";
import { Table } from "../components";
import { employeeColumns } from "../constants";
import { addEmployees } from "../slices/app/EmployeeSlice";
const EmployeesPage: FC = () => {
  const dispatch = useDispatch();
  const fetchAllEmployees = async () => {
    const response = await EMS_CLIENT.get("all-employees");
    console.log("RESPONSE: ", response.data.employeesList);
    dispatch(addEmployees(response.data.employeesList));
  };
  const data = useSelector((state: any) => state.employees);
  console.log("DATA FETCHED FROM STORE: ", data);

  useEffect(() => {
    fetchAllEmployees();
  }, []);
  return (
    <div>
      EmployeesPage
      <Table columns={employeeColumns} data={data} />
    </div>
  );
};

export default EmployeesPage;
