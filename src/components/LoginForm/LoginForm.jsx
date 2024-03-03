import React from "react";
import { Link, Navigate } from "react-router-dom";
// import ResetPassword from "./ResetPassword";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/thunk";
import { selectAccessToken } from "../../redux/selectors";
import { toast } from "react-toastify";

import { BASE_URL } from "../../service/api";
import sprite from "../../images/sprite.svg";
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
  StyledSvgCloseIcon,
  StyledLoginAndIconClosWrap,
  StyledLoginWrap,
} from "./LoginFormStyled";
import AuthNavRegister from "../AuthNav/AuthNavRegister";
import MainPage from "../../pages/MainPage/MainPage";
import { useEffect } from "react";
const LoginForm = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector(selectAccessToken);

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

  if (accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <StyledLoginWrap>
        <StyledFormTopWrap>
          <StyledLoginAndIconClosWrap>
            <StyledTitleLogin>Login</StyledTitleLogin>

            <StyledSvgCloseIcon>
              <use href={`${sprite}#icon-close`}></use>
            </StyledSvgCloseIcon>
          </StyledLoginAndIconClosWrap>

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
          <StyledRestoreAndGoogleAndRegisterWrap>
            <StyledALoginGoogle href={`${BASE_URL}api/auth/google`}>
              Login with google
            </StyledALoginGoogle>
            <AuthNavRegister />
            <StyledLinkRestorePassword to="/reset">
              Restore password
            </StyledLinkRestorePassword>
          </StyledRestoreAndGoogleAndRegisterWrap>
        </StyledFormTopWrap>
      </StyledLoginWrap>
    </>
  );
};

export default LoginForm;
