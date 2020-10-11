import React from "react";
import "./FooterStyles.css";

function FooterColumn({ children, ...restProps }) {
  return (
    <div className="footer-column" {...restProps}>
      {children}
    </div>
  );
}

export default FooterColumn;
