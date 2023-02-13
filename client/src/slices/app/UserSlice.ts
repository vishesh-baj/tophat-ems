import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      state = state.push(...action.payload);
    },
  },
});

export const { addUsers } = usersSlice.actions;
export default usersSlice.reducer;
