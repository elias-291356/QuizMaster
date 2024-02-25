import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledLoginWrap = styled.div`
  display: grid;
  grid-template-columns: 335px;
  grid-template-rows: 386px;
  border: 1px solid var(--white);
  /* grid-column-start: 1; */
  justify-items: center;
  background-color: var(--background);
`;
export const StyledInputEmailWrap = styled.input`
  border: 1px solid var(--white);
  background-color: var(--background);
  color: var(--white);
  border-radius: 30px;
  padding: 14px 243px 14px 18px;
  width: 295px;
  height: 44px;
`;
export const StyledInputPasswordnWrap = styled.input`
  border: 1px solid var(--white);
  background-color: var(--background);
  color: var(--white);
  border-radius: 30px;
  padding: 14px 243px 14px 18px;
  width: 295px;
  height: 44px;
`;
export const StyledInputNameWrap = styled.input`
  border: 1px solid var(--white);
  background-color: var(--background);
  color: var(--white);
  border-radius: 30px;
  padding: 14px 243px 14px 18px;
  width: 295px;
  height: 44px;
`;
export const StyledAuthButton = styled.button`
  border: none;
  border-radius: 30px;
  padding: 16px 128px;
  width: 295px;
  height: 48px;
  background-color: var(--blue);
  color: var(--white);
`;
export const StyledLinkRestorePassword = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;
  color: var(--white);
  opacity: 0.5;
  text-decoration: none;
`;
export const StyledALoginGoogle = styled.a`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14286;
  letter-spacing: -0.01em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #f4f4f4;
`;
export const StyledLoginForm = styled.form`
  display: grid;
  justify-items: center;
  grid-template-columns: 295px;
`;
export const StyledInputesWrap = styled.div`
  display: grid;
  gap: 14px;
`;
export const StyledFormTopWrap = styled.div`
  display: grid;
  grid-template-columns: 295px;

  row-gap: 32px;
`;

export const StyledFormBottomWrap = styled.div`
  display: grid;
  grid-template-columns: 295px;

  row-gap: 32px;
`;
export const StyledTitleLogin = styled.div`
  color: var(--white);
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: -0.01em;
`;
export const StyledRestoreAndGoogleAndRegisterWrap = styled.div`
  display: grid;
  row-gap: 16px;
  padding-top: 16px;
`;
