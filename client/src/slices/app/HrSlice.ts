import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const hrSlice = createSlice({
  name: "hrrequests",
  initialState,
  reducers: {
    addrequest: (state, action) => {
      state = state.push(...action.payload);
    },
  },
});

export const { addrequest } = hrSlice.actions;
export default hrSlice.reducer;
