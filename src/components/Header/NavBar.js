import React from "react";

function NavBar({children, ...restProps}) {
  return (
    <div {...restProps}>{children}</div>
  )
}

export default NavBar;