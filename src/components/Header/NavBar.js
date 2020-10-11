import React from "react";
import "./HeaderStyles.css";

function NavBar({ children, ...restProps }) {
  return <nav {...restProps}>{children}</nav>;
}

export default NavBar;
