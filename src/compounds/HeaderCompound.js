import React from "react";
import HeaderWrapper from "../components/Header/HeaderWrapper"
import NavBar from "../components/Header/NavBar";
import Logo from "../components/Header/Logo";
import SigninButton from "../components/Header/SigninButton";
import FeatureWrapper from "../components/Header/FeatureWrapper";
import FeatureTitle from "../components/Header/FeatureTitle";
import FeatureSubTitle from "../components/Header/FeatureTitle";


function HeaderCompound({children}) {

  return (
    <HeaderWrapper className="header-wrapper-home">
      <NavBar className="navbar-home">
        <Logo />
        <SigninButton>Sign In</SigninButton>
      </NavBar>
      <FeatureWrapper className="feature-wrapper-home">
        <FeatureTitle className="feature-title-home" >Unlimited movies, TV shows and more.</FeatureTitle>
        <FeatureSubTitle className="feature-subtitle-home">Watch anywhere. Cancel at any time.</FeatureSubTitle>
      </FeatureWrapper>
      {children}
    </HeaderWrapper>
  )
}

export default HeaderCompound;
