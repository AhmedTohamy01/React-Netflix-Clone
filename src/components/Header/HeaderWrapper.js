import React from "react";

function HeaderWrapper({children, ...restProps}) {
  return (
    <div {...restProps}>{children}</div>
  )
}

export default HeaderWrapper;