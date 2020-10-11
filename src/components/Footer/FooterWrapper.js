import React from "react";
import "./FooterStyles.css";

function FooterWrapper({ children, ...restProps }) {
  return (
    <footer className="footer-wrapper" {...restProps}>
      {children}
    </footer>
  );
}

export default FooterWrapper;
