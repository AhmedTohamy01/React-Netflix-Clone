import React from "react";
import "./OptFormStyles.css";

function OptFormWrapper({ children, ...restProps }) {
  return (
    <div className="optform-wrapper" {...restProps}>
      {children}
    </div>
  );
}

export default OptFormWrapper;
