import React from "react";
import {
  StyledHeroBtnChoose,
  StyledHeroBtnCreate,
  StyledHeroButtons,
  StyledHeroContent,
  StyledHeroWrap,
  StyledTitleHero,
} from "./HeroStyled";

const Hero = () => {
  return (
    <>
      <StyledHeroWrap>
        <StyledHeroContent>
          <p>Hello visitor! </p>
          <p>
            On the site you will find quizzes and quizzes with various types of
            questions: cinema, music, logic and others. Quizzes differ in the
            degreeof difficulty of questions, the number and type of questions.
            Choose a test Create a quest
          </p>
        </StyledHeroContent>
        <StyledHeroButtons>
          <StyledHeroBtnChoose>Choose a test</StyledHeroBtnChoose>
          <StyledHeroBtnCreate>Create a quest</StyledHeroBtnCreate>
        </StyledHeroButtons>
        <StyledTitleHero>Are you ready to take the Quiz? </StyledTitleHero>
      </StyledHeroWrap>
    </>
  );
};

export default Hero;
