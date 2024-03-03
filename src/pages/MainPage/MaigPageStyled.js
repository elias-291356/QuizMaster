import styled from "styled-components";

export const StyledGridContainer = styled.div`
  display: grid;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  /* grid-template-areas: "header header header"; */
  border: 2px solid teal;
  @media screen and (min-width: 375px) {
    max-width: 375px;
    margin-left: 0 auto;
    margin-right: 0 auto;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 1440px;
  }
`;
