import styled from "styled-components";
// import { StyledGridContainer } from "../../pages/MainPage/MaigPageStyled.js";

export const StyledHeader = styled.div`
  display: grid;
  grid-template-rows: 58px;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-between;

  /* grid-template-areas: "title burger paragraph"; */
  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 704px;
    grid-template-columns: auto auto auto;
    /* grid-template-areas: " paragraph burger title  "; */
  }
  @media screen and (min-width: 1440px) {
    width: 1240px;
  }
`;

export const StyledSvgBurger = styled.svg`
  /* grid-area: burger; */
  stroke: var(--white);
  width: 20px;
  height: 20px;
`;
export const StyledTitle = styled.h1`
  /* grid-area: title; */
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.01em;
  color: var(--white);
`;
export const StyledRegisterAndLoginWrap = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  place-items: center;
  color: var(--white);
  column-gap: 16px;
`;
export const StyledRegisterButton = styled.li`
  display: grid;
  place-items: center;
  border: 1px solid var(--auth-border);
  border-radius: 30px;

  width: 124px;
  height: 48px;
`;
export const StyledLoginButton = styled.li`
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  letter-spacing: -0.01em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--auth-button);
`;
export const StyledAgeCategory = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  place-items: center;
  column-gap: 20px;
  color: var(--white);
`;
export const StyledForAdults = styled.li``;

export const StyledForChildren = styled.li``;
export const StyledAuthAndAgeCategory = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 84px;
`;
