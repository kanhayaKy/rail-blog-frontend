import React from "react";
import Post from "./pages/Post";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./components/Layout";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts/:id",
        element: <Post />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },

];

export default routes;
