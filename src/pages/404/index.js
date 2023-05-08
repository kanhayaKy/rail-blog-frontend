import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const NotFound = () => {
  return (
    <div className="not-found-wrapper">
      <div className={"not-found"}>
        <h1>Page not found</h1>
        <Link to={"/"} className={"link"}>
          <button className="not-found-home-btn">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
