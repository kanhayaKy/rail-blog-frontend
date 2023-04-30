import Navbar from "../Navbar";

import "./style.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <section className="main">
        <div className="main-wrapper">{children}</div>
      </section>
    </div>
  );
};

export default Layout;
