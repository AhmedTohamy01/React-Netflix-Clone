import React from "react";
import "./OptFormStyles.css";

function optFormText({ children, ...restProps }) {
  return (
    <div className="optform-text" {...restProps}>
      {children}
    </div>
  );
}

export default optFormText;
