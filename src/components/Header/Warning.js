import React from "react";
import "./FeatureStyles.css";

function Warning({ children, ...restProps }) {
  return (
    <h2 className="warning" {...restProps}>
      {children}
    </h2>
  );
}

export default Warning;
