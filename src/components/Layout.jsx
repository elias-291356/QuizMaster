import React from "react";
import { Outlet } from "react-router-dom";
import AuthNav from "./AuthNav";

const Layout = () => {
  return (
    <div>
      <AuthNav />
      <Outlet />
      Layout
    </div>
  );
};

export default Layout;
