import React from "react";
import HeaderWrapper from "../components/Header/HeaderWrapper"
import NavBar from "../components/Header/NavBar";

function HeaderCompound({children}) {

  return (
    <HeaderWrapper className="header-wrapper-home">
      <NavBar className="navbar-home">
      </NavBar>
    </HeaderWrapper>
  )
}

export default HeaderCompound;
