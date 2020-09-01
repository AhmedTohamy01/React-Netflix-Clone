import React from "react";

function FooterWrapper({children, ...restProps}) {
  return (
    <div className="footer-wrapper" {...restProps}>{children}</div>
  )
}

export default FooterWrapper;
