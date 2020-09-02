import React from "react";

function FooterWrapper({children, ...restProps}) {
  return (
    <footer className="footer-wrapper" {...restProps}>{children}</footer>
  )
}

export default FooterWrapper;
