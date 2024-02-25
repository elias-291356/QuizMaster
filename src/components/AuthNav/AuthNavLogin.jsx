import React from "react";
import { Link } from "react-router-dom";
import { StyledAuthNavLinkLoginWrap } from "../RegisterForm/RegisterFormStyled";
// import LoginForm from "../LoginForm";
const AuthNavLogin = () => {
  return (
    <>
      <ul>
        <li>
          <StyledAuthNavLinkLoginWrap to="/login">
            Login
          </StyledAuthNavLinkLoginWrap>
        </li>
      </ul>
    </>
  );
};

export default AuthNavLogin;
