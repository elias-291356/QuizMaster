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
  StyledBackdrop,
} from "./RegisterFormStyled";
import { useNavigate } from "react-router-dom";
import { StyledGridContainer } from "../../pages/MainPage/MainPageStyled";
import NavBlock from "../NavBlock/NavBlock";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCloseModalLoginOrRegister = () => {
    navigate("/");
  };

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
      <StyledGridContainer>
        <NavBlock />
      </StyledGridContainer>
      <StyledBackdrop>
        <StyledFormTopWrap>
          <StyledRegisterAndIconClosWrap>
            <StyledTitleRegister>Sign Up</StyledTitleRegister>

            <StyledSvgCloseIcon onClick={handleCloseModalLoginOrRegister}>
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
      </StyledBackdrop>
    </>
  );
};

export default RegisterForm;
