import React from "react";
import { StyledHeader } from "../NavBlock/NavBlockStyled";
import { StyledHeroContainer } from "./HeroAdultStyled";

const HeroAdult = () => {
  return (
    <>
      <StyledHeader>
        <StyledHeroContainer>
          <h1>For Adults</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            autem odio exercitationem aut mollitia. Quisquam excepturi quod
            voluptates consequuntur ad ratione minima accusantium, ipsam
            reiciendis, id, quae doloribus quas consectetur. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit.
          </p>
        </StyledHeroContainer>
      </StyledHeader>
    </>
  );
};

export default HeroAdult;
