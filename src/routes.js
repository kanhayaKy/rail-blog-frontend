import React from "react";
import Post from "./pages/Post";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Register from "./pages/Register";
import CreatePost from "./pages/Post/create";
import EditPost from "./pages/Post/edit";
import Auth from "./components/Auth";

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
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },

  {
    path: "/posts",
    element: <Auth />,
    children: [
      {
        path: "create",
        element: <CreatePost />,
      },
      {
        path: ":id/edit",
        element: <EditPost />,
      },
    ],
  },

  {
    path: "*",
    element: <div>Page not found</div>,
  },
];

export default routes;
