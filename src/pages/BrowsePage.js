import React from "react";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import NavBar from "../components/Header/NavBar";
import Logo from "../components/Header/Logo";
import FeatureWrapper from "../components/Header/FeatureWrapper";
import FeatureTitle from "../components/Header/FeatureTitle";
import FeatureSubTitle from "../components/Header/FeatureSubTitle";
import PlayButton from "../components/Header/PlayButton";
import HeaderLink from "../components/Header/HeaderLink";


function BrowsePage() {

  return (
    <>
    <HeaderWrapper className="header-wrapper-browse">
      <NavBar className="navbar-browse">
        <Logo />
        <HeaderLink>Films</HeaderLink>
        <HeaderLink>Series</HeaderLink>
      </NavBar>
      <FeatureWrapper>
        <FeatureTitle className="feature-title-browse">Watch Joker Now</FeatureTitle>
        <FeatureSubTitle className="feature-subtitle-browse">
          Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the 
          streets of Gotham City. Arthur wears two masks, the one he paints for his day job as 
          a clown, and the guise he projects in a futile attempt to feel like he is part of 
          the world around him.
        </FeatureSubTitle>
        <PlayButton>Play</PlayButton>
      </FeatureWrapper>
    </HeaderWrapper>
    </>
  )
}

export default BrowsePage;
