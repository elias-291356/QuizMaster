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
import { Navigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HeroAdult from "../HeroAdult/HeroAdult";
import HeroChildren from "../HeroChildren/HeroChildren";
import { useEffect } from "react";
const NavBlock = () => {
  const isMobile = useMediaQuery("(min-width: 768px)");
  const navigate = useNavigate();
  const [showHeroAdult, setShowHeroAdult] = useState(false);
  const [showHeroChildren, setShowHeroChildren] = useState(false);

  const handleClickRegister = () => {
    navigate("/register");
  };
  const handleClickLogin = () => {
    navigate("/login");
  };

  const handleClickChildren = () => {
    setShowHeroChildren(true);
    setShowHeroAdult(false); // Убедитесь, что состояние showHeroAdult сбрасывается при клике на детский элемент
  };

  const handleClickAdult = () => {
    setShowHeroAdult(true);
    setShowHeroChildren(false); // Убедитесь, что состояние showHeroChildren сбрасывается при клике на элемент для взрослых
  };

  return (
    <>
      <StyledHeader>
        <StyledTitle>QuizMaster</StyledTitle>
        {isMobile && (
          <>
            {/* <StyledAuthAndAgeCategory> */}
            <StyledAgeCategory>
              <StyledAgeItem onClick={handleClickAdult}>
                For Adults
              </StyledAgeItem>
              <StyledAgeItem onClick={handleClickChildren}>
                For Children
              </StyledAgeItem>
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
      {showHeroChildren ? (
        <HeroChildren />
      ) : showHeroAdult ? (
        <HeroAdult />
      ) : null}
    </>
  );
};

export default NavBlock;
