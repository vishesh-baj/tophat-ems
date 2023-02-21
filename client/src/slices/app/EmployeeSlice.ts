import { IEmployees } from "./../../interfaces/index";
import EMS_CLIENT from "../../api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchUserData = createAsyncThunk("all-employees", async () => {
  const response = await EMS_CLIENT.get("all-emplouees");
  return response.data, console.log(response.data);
});

const initialState: any = [];

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployees: (state, action) => {
      state = state.push(...action.payload);
    },
  },
});

export const { addEmployees } = employeeSlice.actions;
export default employeeSlice.reducer;
