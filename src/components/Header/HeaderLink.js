import React from "react";
import "./HeaderStyles.css";

function HeaderLink({ children, ...restProps }) {
  return (
    <div className="header-link">
      <a {...restProps}>{children}</a>
    </div>
  );
}

export default HeaderLink;
