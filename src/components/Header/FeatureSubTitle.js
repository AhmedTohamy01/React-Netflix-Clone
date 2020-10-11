import React from "react";
import "./FeatureStyles.css";

function FeatureSubTitle({ children, ...restProps }) {
  return (
    <h2 className="feature-subtitle" {...restProps}>
      {children}
    </h2>
  );
}

export default FeatureSubTitle;
