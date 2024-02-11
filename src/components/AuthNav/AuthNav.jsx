import React from "react";
import { Link } from "react-router-dom";
// import LoginForm from "../LoginForm";
const AuthNav = () => {
  return (
    <>
      <h1>AuthNav</h1>
      <ul>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/register">register</Link>
        </li>
      </ul>
    </>
  );
};

export default AuthNav;
