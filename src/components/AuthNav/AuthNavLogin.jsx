import React from "react";
import { Link } from "react-router-dom";
// import LoginForm from "../LoginForm";
const AuthNavLogin = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/login">login</Link>
        </li>
      </ul>
    </>
  );
};

export default AuthNavLogin;
