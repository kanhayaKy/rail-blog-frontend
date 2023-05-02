import React from "react";
import Post from "./pages/Post";
import Home from "./pages/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/posts/:id",
    element: <Post />,
  },
];

export default routes;
