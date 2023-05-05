import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

import "./style.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      hello world
      <section className="main">
        <div className="main-wrapper">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Layout;
