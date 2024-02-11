import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

const AuthNav = () => {
  return (
    <div>
      <h1>AuthNav</h1>
      <Link to="/login">login</Link>
      <Link to="/register">register</Link>
    </div>
  );
};

export default AuthNav;
