import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slices/counter/CounterSlice";
import AppReducer from "./slices/app/AppSlice";
import EmployeeReducer from "./slices/app/EmployeeSlice";

export const store = configureStore({
  reducer: {
    app: AppReducer,
    employees: EmployeeReducer,
    counter: CounterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
