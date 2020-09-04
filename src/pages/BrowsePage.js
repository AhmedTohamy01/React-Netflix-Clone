import React from "react";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import NavBar from "../components/Header/NavBar";
import Logo from "../components/Header/Logo";
import FeatureWrapper from "../components/Header/FeatureWrapper";


function BrowsePage() {

  return (
    <>
    <HeaderWrapper className="header-wrapper-browse">
      <NavBar className="navbar-browse">
        <Logo />

      </NavBar>
      <FeatureWrapper>
        
      </FeatureWrapper>
    </HeaderWrapper>
    </>
  )
}

export default BrowsePage;
