import React from "react";

function NavBar({children, ...restProps}) {
  return (
    <nav {...restProps}>{children}</nav>
  )
}

export default NavBar;