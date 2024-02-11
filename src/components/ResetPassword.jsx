import React from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const toBack = () => {
    navigate("/login");
  };
  return (
    <div>
      <h3>Enter email for restore password</h3>
      <input type="email" placeholder="Email" />
      <button>Enter</button>
      <button onClick={toBack}>Back</button>
    </div>
  );
};

export default ResetPassword;
