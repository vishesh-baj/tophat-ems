import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slices/counter/CounterSlice";
import AppReducer from "./slices/app/AppSlice";
export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    app: AppReducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
