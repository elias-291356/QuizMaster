import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/thunk";
import sprite from "../../images/sprite.svg";
import {
  StyledInputEmailWrap,
  StyledInputNameWrap,
  StyledInputPasswordnWrap,
  StyledAuthButton,
  StyledSvgCloseIcon,
  StyledFormTopWrap,
  StyledInputesWrap,
  StyledFormBottomWrap,
} from "../LoginForm/LoginFormStyled";
import AuthNavLogin from "../AuthNav/AuthNavLogin";
import {
  StyledRegisterAndIconClosWrap,
  StyledRegisterForm,
  StyledRegisterRouteWrap,
  StyledTitleRegister,
  StyledRegisterWrap,
} from "./RegisterFormStyled";

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
      <StyledRegisterWrap>
        <StyledFormTopWrap>
          <StyledRegisterAndIconClosWrap>
            <StyledTitleRegister>Sign Up</StyledTitleRegister>

            <StyledSvgCloseIcon>
              <use href={`${sprite}#icon-close`}></use>
            </StyledSvgCloseIcon>
          </StyledRegisterAndIconClosWrap>
          <StyledRegisterForm onSubmit={handleSubmit(onSubmit)}>
            <StyledFormBottomWrap>
              <StyledInputesWrap>
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
              </StyledInputesWrap>
              <StyledAuthButton type="submit">Enter</StyledAuthButton>
            </StyledFormBottomWrap>
            <StyledRegisterRouteWrap>
              <AuthNavLogin />
            </StyledRegisterRouteWrap>
          </StyledRegisterForm>
        </StyledFormTopWrap>
      </StyledRegisterWrap>
    </>
  );
};

export default RegisterForm;
