import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./reducers/posts";

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

export default store;
