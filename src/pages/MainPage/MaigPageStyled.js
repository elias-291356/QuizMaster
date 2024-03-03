import styled from "styled-components";

import { StyledHeader } from "../../components/NavBlock/NavBlockStyled.js";

export const StyledGridContainer = styled.div`
  display: grid;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  background-color: var(--background);
  /* grid-template-columns: auto, auto;
  grid-template-rows: auto, auto; */

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
