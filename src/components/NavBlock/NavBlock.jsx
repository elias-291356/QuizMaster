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
  // StyledForAdults,
  // StyledForChildren,
  StyledAgeItem,
  // StyledAuthAndAgeCategory,
} from "./NavBlockStyled";
import { useMediaQuery } from "@react-hook/media-query";

import { useNavigate } from "react-router-dom";
const NavBlock = () => {
  const isMobile = useMediaQuery("(min-width: 768px)");
  const navigate = useNavigate();
  const handleClickRegister = () => {
    navigate("/register");
  };
  const handleClickLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <StyledHeader>
        <StyledTitle>QuizMaster</StyledTitle>
        {isMobile && (
          <>
            {/* <StyledAuthAndAgeCategory> */}
            <StyledAgeCategory>
              <StyledAgeItem>For Adults</StyledAgeItem>
              <StyledAgeItem>For Children</StyledAgeItem>
            </StyledAgeCategory>
            <StyledRegisterAndLoginWrap>
              <StyledRegisterButton onClick={handleClickRegister}>
                Register
              </StyledRegisterButton>
              <StyledLoginButton onClick={handleClickLogin}>
                Login
              </StyledLoginButton>
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
