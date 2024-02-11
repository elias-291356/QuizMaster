import React from "react";
import { Link } from "react-router-dom";
// import ResetPassword from "./ResetPassword";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  // console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="E-mail"
          {...register("E-mail", { required: true })}
        />
        <input
          type="password"
          placeholder="Password"
          {...register("Password", { required: true })}
        />

        {/* <input type="submit" /> */}
        <button type="submit">Enter</button>
      </form>
      <Link to="/reset">Restore password</Link>
    </div>
  );
};

export default LoginForm;