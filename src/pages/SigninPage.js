import React from "react";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import NavBar from "../components/Header/NavBar";
import Logo from "../components/Header/Logo";
import FooterCompound from "../compounds/FooterCompound";
import SignFormWrapper from "../components/SignForm/SignFormWrapper";
import SignFormBase from "../components/SignForm/SignFormBase";
import SignFormTitle from "../components/SignForm/SignFormTitle";

function SigninPage() {

  return (
    <>
    <HeaderWrapper className="header-wrapper-home">
      <NavBar className="navbar-home">
        <Logo />
      </NavBar>
      <SignFormWrapper>
        <SignFormBase>
          <SignFormTitle>Sign In</SignFormTitle>

        </SignFormBase>
      </SignFormWrapper>
    </HeaderWrapper>
    <FooterCompound />
    </>
  )
}

export default SigninPage;