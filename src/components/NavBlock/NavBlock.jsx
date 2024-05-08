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
import { useState } from "react";
import HeroAdult from "../HeroAdult/HeroAdult";
import HeroChildren from "../HeroChildren/HeroChildren";
import Hero from "../Hero/Hero";
import Burger from "../Burger/Burger";
import { StyledBurger } from "../Burger/BurgerStyled";
import { useEffect } from "react";

const NavBlock = () => {
  const isMobile = useMediaQuery("(min-width: 768px)");
  const isBurger = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();
  const [showHero, setShowHero] = useState(false);
  const [showHeroAdult, setShowHeroAdult] = useState(false);
  const [showHeroChildren, setShowHeroChildren] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const handleClickRegister = () => {
    navigate("/register");
  };
  const handleClickLogin = () => {
    navigate("/login");
  };

  const handleClickChildren = () => {
    setShowHeroChildren(true);
    setShowHeroAdult(false);
  };

  const handleClickAdult = () => {
    setShowHeroAdult(true);
    setShowHeroChildren(false);
  };

  const handleClickToLogo = () => {
    setShowHero(true);
    setShowHeroChildren(false);
    setShowHeroAdult(false);
  };
  const handleClickOnBurger = () => {
    setShowBurgerMenu(true);
  };
  const handleCloseBurgerMenu = () => {
    setShowBurgerMenu(false);
  };

  return (
    <>
      <StyledHeader>
        <StyledTitle onClick={handleClickToLogo}>QuizMaster</StyledTitle>
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
          <StyledSvgBurger onClick={handleClickOnBurger}>
            <use href={`${sprite}#icon-burger`}></use>
          </StyledSvgBurger>
        )}
      </StyledHeader>
      {isBurger && showBurgerMenu && (
        <StyledBurger>
          <Burger
            onClose={handleCloseBurgerMenu}
            toRegister={handleClickRegister}
            toLogin={handleClickLogin}
          />
        </StyledBurger>
      )}

      {showHeroChildren ? (
        <HeroChildren />
      ) : showHeroAdult ? (
        <HeroAdult />
      ) : (
        <Hero />
      )}
      {/* <Voice> */}
      {/* <Enlist> */}
    </>
  );
};

export default NavBlock;
