// import { useState } from "react";

import { Route, Routes, Link } from "react-router-dom";
import Layout from "./components/Layout";
import LoginForm from "./components/LoginForm";
import RegisterFrom from "./components/RegisterFrom";
import ResetPassword from "./components/ResetPassword";
// import AuthPage from "./pages/AuthPage";

// import "./App.css";
// import { useDispatch, useSelector } from "react-redux";
// import { selectCount, selectIsSubmit } from "./redux/selector";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterFrom />} />
        </Route>
        <Route path="reset" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;
