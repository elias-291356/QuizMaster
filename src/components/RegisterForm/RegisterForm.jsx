import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/thunk";
import {
  StyledInputEmailWrap,
  StyledInputNameWrap,
  StyledInputPasswordnWrap,
  StyledAuthButton,
} from "../LoginForm/LoginFormStyled";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(registerThunk(data));
  };
  console.log(errors);
  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledInputNameWrap
          type="text"
          placeholder="name"
          {...register("username", { required: true })}
        />
        <StyledInputEmailWrap
          type="email"
          placeholder="E-mail"
          {...register("email", { required: true })}
        />
        <StyledInputPasswordnWrap
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />

        {/* <input type="submit" /> */}
        <StyledAuthButton type="submit">Enter</StyledAuthButton>
      </form>
    </>
  );
};

export default RegisterForm;
