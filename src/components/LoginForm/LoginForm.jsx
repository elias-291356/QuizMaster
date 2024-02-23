import React from "react";
import { Link } from "react-router-dom";
// import ResetPassword from "./ResetPassword";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/thunk";
import { selectIsLoggedIn, selectName } from "../../redux/selectors";
import { toast } from "react-toastify";
import { BASE_URL } from "../../service/api";
const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectName);
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
    toast.success(`logged`);
    return <h1>logining...</h1>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
        />
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />

        {/* <input type="submit" /> */}
        <button type="submit">Enter</button>
      </form>
      <Link to="/reset">Restore password</Link>
      <a href={`${`BASE_URL`}api/auth/google`}>Logn with google</a>;
    </div>
  );
};

export default LoginForm;
