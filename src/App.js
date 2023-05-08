import React, { useEffect } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";

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
    <RouterProvider router={router}>
      <ErrorBoundary FallbackComponent={<div>404</div>}>
        <Layout />
      </ErrorBoundary>
    </RouterProvider>
  );
}

export default App;
