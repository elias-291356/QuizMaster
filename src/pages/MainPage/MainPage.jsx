import React from "react";
import Advantages from "../../components/Advantages/Advantages ";
import Hero from "../../components/Hero/Hero";
import NavBlock from "../../components/NavBlock/NavBlock";
import Quizes from "../../components/Quizes/Quizes";
import Reviews from "../../components/Reviews/Reviews";
import Stats from "../../components/Stats/Stats";
import { StyledGridContainer } from "./MaigPageStyled";

const MainPage = () => {
  return (
    <>
      <StyledGridContainer>
        {/* MainPage */}
        {/* <Advantages /> */}
        {/* <Hero /> */}
        <NavBlock />
        {/* <Quizes /> */}
        {/* <Reviews /> */}
        {/* <Stats /> */}
      </StyledGridContainer>
    </>
  );
};

export default MainPage;
