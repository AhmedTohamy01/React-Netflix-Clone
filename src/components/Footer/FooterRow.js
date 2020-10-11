import React from "react";
import "./FooterStyles.css";

function FooterRow({ children, ...restProps }) {
  return (
    <div className="footer-row" {...restProps}>
      {children}
    </div>
  );
}

export default FooterRow;
