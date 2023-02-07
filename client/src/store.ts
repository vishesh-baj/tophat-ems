import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

const specifics = () => {
  let specificsProvided = () => {
    // there are so many things in this world on which we dont have any control like earthquakes tsunamies and what not but the thing is that on what we can like to forgive someone or to spread hapiness without expecting any in return
  };

};


