import React from "react";
import { Link } from "react-router-dom";
// import ResetPassword from "./ResetPassword";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/thunk";
import { selectIsLoggedIn, selectName } from "../../redux/selectors";
import { toast } from "react-toastify";

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectName);
  console.log(userName);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(loginThunk(data));
  };
  // console.log(errors);
  if (isLoggedIn) {
    toast.success(`logged, ${userName}`);
    return <h1>logged</h1>;
  }
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
