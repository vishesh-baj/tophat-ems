import { IEmployees } from "./../../interfaces/index";
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployees: (state, action) => {
      state = state.push(action.payload);
    },
  },
});

export const { addEmployees } = employeeSlice.actions;
export default employeeSlice.reducer;
