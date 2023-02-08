import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  theme: string;
  token: string | null;
}
const initialState: AppState = {
  theme: "default",
  token: null,
};
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setTheme: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { setToken, setTheme } = appSlice.actions;

export default appSlice.reducer;
