import React, { useEffect } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useDispatch } from "react-redux";

import routes from "./routes";
import "./App.css";

import Layout from "./components/Layout";
import { authorizeUser } from "./store/reducers/auth";

function App() {
  const router = createBrowserRouter(routes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const args = { type: "checkAuth" };
      dispatch(authorizeUser(args));
    }
  }, [dispatch]);

  return (
    <React.Fragment>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </React.Fragment>
  );
}

export default App;
