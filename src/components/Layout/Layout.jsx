import React from "react";
import { Outlet } from "react-router-dom";

// import AuthNavRegister from "../AuthNav/AuthNavRegister";
import { StyledLoginWrap } from "../LoginForm/LoginFormStyled";

const Layout = () => {
  return (
    <StyledLoginWrap>
      <Outlet />
    </StyledLoginWrap>
  );
};

export default Layout;
