import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledRegisterAndIconClosWrap = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
`;
export const StyledTitleRegister = styled.div`
  color: var(--white);

  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: -0.01em;
`;
export const StyledRegisterForm = styled.form`
  display: grid;
  justify-items: center;
  grid-template-columns: 295px;
`;
export const StyledAuthNavLinkLoginWrap = styled(Link)`
  color: var(--white);
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;
  text-decoration: underline;
  padding-top: 16px;
`;

export const StyledRegisterRouteWrap = styled.div`
  display: grid;
  justify-items: center;
  padding-top: 16px;
  padding-bottom: 40px;
`;
export const StyledRegisterWrap = styled.div`
  display: grid;
  justify-items: center;
  background-color: var(--background);
`;
