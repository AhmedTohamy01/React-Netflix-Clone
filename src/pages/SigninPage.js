import React from "react";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import NavBar from "../components/Header/NavBar";
import Logo from "../components/Header/Logo";
import FooterCompound from "../compounds/FooterCompound";
import SignFormWrapper from "../components/SignForm/SignFormWrapper";
import SignFormBase from "../components/SignForm/SignFormBase";
import SignFormTitle from "../components/SignForm/SignFormTitle";
import SignFormInput from "../components/SignForm/SignFormInput";
import SignFormButton from "../components/SignForm/SignFormButton";
import SignFormText from "../components/SignForm/SignFormText";
import SignFormLink from "../components/SignForm/SignFormLink";

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
          <SignFormInput 
          type="text" 
          placeholder="Email Address"
          >
          </SignFormInput>
          <SignFormInput 
          type="password"
          placeholder="Password"
          autoComplete="off"
          >
          </SignFormInput> 
          <SignFormButton>Sign In</SignFormButton> 
          <SignFormText>New to Netflix? <SignFormLink href="/signup">Sign up now.</SignFormLink> </SignFormText>
        </SignFormBase>
      </SignFormWrapper>
    </HeaderWrapper>
    <FooterCompound />
    </>
  )
}

export default SigninPage;