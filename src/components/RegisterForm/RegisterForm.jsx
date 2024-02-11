import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/thunk";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="name"
        {...register("name", { required: true })}
      />
      <input
        type="email"
        placeholder="E-mail"
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
  );
};

export default RegisterForm;
