import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

const downloadMultiple = (urls) => {
  urls.forEach(function (url) {
    var link = document.createElement("a");
    link.href = url;
    link.download = url.substring(url.lastIndexOf("/") + 1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
};
