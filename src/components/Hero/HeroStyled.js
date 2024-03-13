import styled from "styled-components";

export const StyledHeroWrap = styled.div`
  display: grid;

  grid-row-gap: 32px;
  width: 335px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.01em;
  color: var(--white);
`;
export const StyledHeroContent = styled.div`
  display: grid;

  grid-row-gap: 16px;
`;
export const StyledHeroButtons = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 14px;
`;
export const StyledHeroBtnChoose = styled.button`
  border-radius: 30px;
  padding: 16px 32px;
  width: 160px;
  height: 48px;
  background: var(--blue);
  border: none;

  font-weight: 700;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;
  color: #f4f4f4;
`;
export const StyledHeroBtnCreate = styled.button`
  border: 1px solid rgba(244, 244, 244, 0.6);
  border-radius: 30px;
  padding: 16px 32px;
  width: 160px;
  height: 48px;
  background-color: transparent;

  font-weight: 700;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;
  color: var(--white);
`;
export const StyledTitleHero = styled.h1`
  font-weight: 700;
  font-size: 44px;
  line-height: 1.09091;
  letter-spacing: -0.01em;
  color: var(--white);

  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 704px;
    font-size: 90px;
  }
  @media screen and (min-width: 1440px) {
    width: 1240px;
    font-size: 120px;
  }
`;
