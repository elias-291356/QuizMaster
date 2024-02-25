// import { useState } from "react";

import { Route, Routes, Link } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoginForm from "./components/LoginForm/LoginForm";
import NotFound from "./components/NotFound/NotFound";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import AuthPage from "./pages/AuthPage";

// import "./App.css";
// import { useDispatch, useSelector } from "react-redux";
// import { selectCount, selectIsSubmit } from "./redux/selector";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="/" element={<AuthPage />}> */}
          <Route index element={<LoginForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="reset" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;
