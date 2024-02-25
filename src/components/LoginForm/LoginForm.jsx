import React from "react";
import { Link } from "react-router-dom";
// import ResetPassword from "./ResetPassword";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/thunk";
import { selectIsLoggedIn, selectName } from "../../redux/selectors";
import { toast } from "react-toastify";
import { BASE_URL } from "../../service/api";
import {
  StyledInputEmailWrap,
  StyledInputPasswordnWrap,
  StyledAuthButton,
  StyledLinkRestorePassword,
  StyledALoginGoogle,
  StyledLoginForm,
  StyledInputesWrap,
  StyledFormBottomWrap,
  StyledFormTopWrap,
  StyledTitleLogin,
  StyledRestoreAndGoogleAndRegisterWrap,
} from "./LoginFormStyled";
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
    <>
      <StyledFormTopWrap>
        <StyledTitleLogin>Login</StyledTitleLogin>
        <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
          <StyledFormBottomWrap>
            <StyledInputesWrap>
              <StyledInputEmailWrap
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              <StyledInputPasswordnWrap
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </StyledInputesWrap>
            <StyledAuthButton type="submit">Enter</StyledAuthButton>
          </StyledFormBottomWrap>
        </StyledLoginForm>
      </StyledFormTopWrap>
      <StyledRestoreAndGoogleAndRegisterWrap>
        <StyledALoginGoogle href={`${BASE_URL}api/auth/google`}>
          Login with google
        </StyledALoginGoogle>
        <StyledLinkRestorePassword to="/reset">
          Restore password
        </StyledLinkRestorePassword>
      </StyledRestoreAndGoogleAndRegisterWrap>
    </>
  );
};

export default LoginForm;
