import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import React from "react";
import Layout from "./components/Layout";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <React.Fragment>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </React.Fragment>
  );
}

export default App;
