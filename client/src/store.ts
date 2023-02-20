import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slices/counter/CounterSlice";
import AppReducer from "./slices/app/appSlice";
import EmployeeReducer from "./slices/app/EmployeeSlice";
import CandidatesReducer from "./slices/app/CandidateSlice";
import UsersReducer from "./slices/app/UserSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { employeesApi } from "./services/apiSlice";
import { appSlice } from "./slices/app/appSlice";

export const store = configureStore({
  reducer: {
    app: AppReducer,
    users: UsersReducer,
    employees: EmployeeReducer,
    candidates: CandidatesReducer,
    counter: CounterReducer,
    // appSlice,
    // [employeesApi.reducerPath]: employeesApi.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(employeesApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
