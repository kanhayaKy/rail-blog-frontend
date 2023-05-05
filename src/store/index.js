import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth";
import { postReducer } from "./reducers/posts";

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
  },
});

export default store;
