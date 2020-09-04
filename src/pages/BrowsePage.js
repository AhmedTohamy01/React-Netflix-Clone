import React from "react";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import NavBar from "../components/Header/NavBar";
import Logo from "../components/Header/Logo";


function BrowsePage() {

  return (
    <>
    <HeaderWrapper className="header-wrapper-browse">
      <NavBar className="navbar-browse">
        <Logo />

      </NavBar>
    </HeaderWrapper>
    </>
  )
}

export default BrowsePage;
