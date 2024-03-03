import styled from "styled-components";
import { StyledGridContainer } from "../../pages/MainPage/MaigPageStyled.js";

export const StyledHeader = styled.div`
  display: grid;
  /* width: 375px; */
  grid-template-rows: 58px;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-between;
  border: 1px solid red;
  /* grid-area: header; */

  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 704px;
  }
  @media screen and (min-width: 1440px) {
    width: 1240px;
  }
`;

export const StyledSvgBurger = styled.svg`
  stroke: tomato;
  width: 20px;
  height: 20px;
`;
export const StyledTitle = styled.h1`
  /* font-family: "Gilroy", sans-serif; */
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.01em;
  /* color: var(--white); */
  color: tomato;
`;
