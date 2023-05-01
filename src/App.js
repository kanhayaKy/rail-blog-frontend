import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";


import routes from "./routes";
import "./App.css";

import Layout from "./components/Layout";
import store from "./store";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <React.Fragment>
      <Provider store={store}>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </Provider>
    </React.Fragment>
  );
}

export default App;
