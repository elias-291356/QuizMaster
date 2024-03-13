import styled from "styled-components";

export const StyledBurger = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  width: 375px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: var(--blue);
`;
export const StyledHeaderBurger = styled.div`
  display: grid;
  grid-template-rows: 58px;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-between;
`;
export const WrapBurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  height: 812px;
`;
export const StyledAgeCategoryBurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 250px;
  padding-bottom: 375px;
  color: var(--white);
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.01em;
  row-gap: 20px;
`;
export const StyledRegisterAndLoginWrapBurger = styled.div`
  display: flex;
  column-gap: 16px;
  margin-left: auto;
  margin-right: auto;
`;
