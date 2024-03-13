import styled from "styled-components";

export const StyledGridContainer = styled.div`
  display: grid;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  background-color: var(--background);
  background-image: url(src/images/overlay_mobile.png),
    url(src/images/background_mobile.png);
  /* grid-template-columns: auto, auto;
  grid-template-rows: auto, auto; */
  background-repeat: no-repeat;
  max-width: 1440px;
  /* height: 812px; */
  background-position: 100% 0%;
  grid-auto-rows: 358px;

  @media screen and (min-width: 375px) {
    height: 812px;
    max-width: 375px;
    margin-left: 0 auto;
    margin-right: 0 auto;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    background-image: url(src/images/overlay_tablet.png),
      url(src/images/background_tablet.png);
    grid-auto-rows: 396px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 1440px;
    background-image: url(src/images/overlay_desktop.png),
      url(src/images/background_desktop.png);
  }
`;
