import React from "react";
import HeaderWrapper from "../components/Header/HeaderWrapper"
import NavBar from "../components/Header/NavBar";
import Logo from "../components/Header/Logo";
import SigninButton from "../components/Header/SigninButton";

function HeaderCompound({children}) {

  return (
    <HeaderWrapper className="header-wrapper-home">
      <NavBar className="navbar-home">
        <Logo />
        <SigninButton>Sign In</SigninButton>
      </NavBar>
      {children}
    </HeaderWrapper>
  )
}

export default HeaderCompound;
