import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
  },
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    },
  },
});
export const { setToken } = authSlice.actions;
export default authSlice.reducer;
