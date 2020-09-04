import React from "react";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import NavBar from "../components/Header/NavBar";
import Logo from "../components/Header/Logo";
import FeatureWrapper from "../components/Header/FeatureWrapper";
import FeatureTitle from "../components/Header/FeatureTitle";


function BrowsePage() {

  return (
    <>
    <HeaderWrapper className="header-wrapper-browse">
      <NavBar className="navbar-browse">
        <Logo />
      </NavBar>
      <FeatureWrapper>
        <FeatureTitle className="feature-title-browse">Watch Joker Now</FeatureTitle>
      </FeatureWrapper>
    </HeaderWrapper>
    </>
  )
}

export default BrowsePage;
