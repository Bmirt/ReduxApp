import React from "react";
import { Link } from "react-router-dom";
import PageNotFound from "./88s9hwctxw1s.jpg";
const NotFound = () => (
  <div className="content2">
    <span className="animatedText">ERROR 404</span>
    <img
      src={PageNotFound}
      style={{
        display: "block",
        margin: "auto",
        position: "relative"
      }}
    />
    <center>
      <Link to="/">Return to Home Page</Link>
    </center>
  </div>
);
export default NotFound;
