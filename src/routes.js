import React from "react";
import Post from "./pages/Post";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Register from "./pages/Register";
import CreatePost from "./pages/Post/create";
import EditPost from "./pages/Post/edit";
import Auth from "./components/Auth";
import NotFound from "./pages/404";
import ProfilePage from "./pages/Profile";

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
        path: ":username/posts/:id",
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
    path: "/profile/:username",
    element: <Auth />,
    children: [
      {
        path: "",
        element: <ProfilePage />,
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
    element: <NotFound />,
  },
];

export default routes;
