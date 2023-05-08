import React from "react";
import Post from "./pages/Post";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Register from "./pages/Register";
import CreatePost from "./pages/Post/create";
import EditPost from "./pages/Post/edit";

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
        path: "/posts/create",
        element: <CreatePost />,
      },
      {
        path: "/posts/:id/edit",
        element: <EditPost />,
      },
      {
        path: "/posts/:id",
        element: <Post />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
];

export default routes;
