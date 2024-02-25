import React from "react";
import { Link } from "react-router-dom";
// import ResetPassword from "./ResetPassword";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/thunk";
import { selectIsLoggedIn, selectName } from "../../redux/selectors";
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
  // StyledSvgWrap,
} from "./LoginFormStyled";
import AuthNavRegister from "../AuthNav/AuthNavRegister";
const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

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
      </StyledFormTopWrap>
      <StyledRestoreAndGoogleAndRegisterWrap>
        <StyledALoginGoogle href={`${BASE_URL}api/auth/google`}>
          Login with google
        </StyledALoginGoogle>
        <AuthNavRegister />
        <StyledLinkRestorePassword to="/reset">
          Restore password
        </StyledLinkRestorePassword>
      </StyledRestoreAndGoogleAndRegisterWrap>
    </>
  );
};

export default LoginForm;
