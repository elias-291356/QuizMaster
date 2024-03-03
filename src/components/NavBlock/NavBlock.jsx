import React from "react";
import sprite from "../../images/sprite.svg";
import { StyledSvgBurger, StyledTitle, StyledHeader } from "./NavBlockStyled";
const NavBlock = () => {
  return (
    <>
      <StyledHeader>
        <StyledTitle>QuizMaster</StyledTitle>

        <StyledSvgBurger>
          <use href={`${sprite}#icon-close`}></use>
        </StyledSvgBurger>
      </StyledHeader>
    </>
  );
};

export default NavBlock;
