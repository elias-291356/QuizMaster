import React from "react";
import { Outlet } from "react-router-dom";
import AuthNav from "../AuthNav/AuthNav";
import { StyledLoginWrap } from "../LoginForm/LoginFormStyled";

const Layout = () => {
  return (
    <StyledLoginWrap>
      <AuthNav />
      <Outlet />
      Layout
    </StyledLoginWrap>
  );
};

export default Layout;
