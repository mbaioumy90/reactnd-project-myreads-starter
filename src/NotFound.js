import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";

const NotFound = () => (
  <div className="">
    <Header />
    <div>     
        <h1>Opps: 404 - Not Found!</h1>
        <Link to="/">Go Home</Link>
      </div>
  </div>
);

export default NotFound;
