import React from "react";
import { Link } from "react-router-dom";
import { StyledAuthNavLinkRegisterWrap } from "./AuthNavRegisterStyled";
// import LoginForm from "../LoginForm";
const AuthNavRegister = () => {
  return (
    <>
      <ul>
        <li>
          <StyledAuthNavLinkRegisterWrap to="/register">
            Register
          </StyledAuthNavLinkRegisterWrap>
        </li>
      </ul>
    </>
  );
};

export default AuthNavRegister;
