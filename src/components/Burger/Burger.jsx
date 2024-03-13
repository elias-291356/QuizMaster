import React from "react";
import {
  StyledHeader,
  StyledLoginButton,
  StyledRegisterAndLoginWrap,
  StyledRegisterButton,
  StyledSvgBurger,
  StyledTitle,
} from "../NavBlock/NavBlockStyled";
import sprite from "../../images/sprite.svg";
import {
  StyledAgeCategoryBurgerMenu,
  StyledHeaderBurger,
  StyledRegisterAndLoginWrapBurger,
  WrapBurgerMenu,
} from "./BurgerStyled";

const Burger = ({ onClose, toRegister, toLogin }) => {
  const handleClickOnCloseModal = () => {
    onClose();
  };
  return (
    <>
      <WrapBurgerMenu>
        <StyledHeaderBurger>
          <StyledTitle>QuizMaster</StyledTitle>
          <StyledSvgBurger onClick={handleClickOnCloseModal}>
            <use href={`${sprite}#icon-close`}></use>
          </StyledSvgBurger>
        </StyledHeaderBurger>
        <StyledAgeCategoryBurgerMenu>
          <p>For Adults</p>
          <p>For Children</p>
        </StyledAgeCategoryBurgerMenu>
        <StyledRegisterAndLoginWrapBurger>
          <StyledRegisterButton onClick={toRegister}>
            Register
          </StyledRegisterButton>
          <StyledLoginButton onClick={toLogin}>Login</StyledLoginButton>
        </StyledRegisterAndLoginWrapBurger>
      </WrapBurgerMenu>
    </>
  );
};

export default Burger;
