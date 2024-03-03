import React from "react";
import sprite from "../../images/sprite.svg";
import {
  StyledSvgBurger,
  StyledTitle,
  StyledHeader,
  StyledRegisterAndLoginWrap,
  StyledRegisterButton,
  StyledLoginButton,
  StyledAgeCategory,
  StyledForAdults,
  StyledForChildren,
  StyledAuthAndAgeCategory,
} from "./NavBlockStyled";
import { useMediaQuery } from "@react-hook/media-query";

const NavBlock = () => {
  const isMobile = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <StyledHeader>
        <StyledTitle>QuizMaster</StyledTitle>
        {isMobile && (
          <>
            {/* <StyledAuthAndAgeCategory> */}
            <StyledAgeCategory>
              <StyledForAdults>For Adults</StyledForAdults>
              <StyledForChildren>For Children</StyledForChildren>
            </StyledAgeCategory>
            <StyledRegisterAndLoginWrap>
              <StyledRegisterButton>Register</StyledRegisterButton>
              <StyledLoginButton>Login</StyledLoginButton>
            </StyledRegisterAndLoginWrap>
            {/* </StyledAuthAndAgeCategory> */}
          </>
        )}
        {!isMobile && (
          <StyledSvgBurger>
            <use href={`${sprite}#icon-burger`}></use>
          </StyledSvgBurger>
        )}
      </StyledHeader>
    </>
  );
};

export default NavBlock;
