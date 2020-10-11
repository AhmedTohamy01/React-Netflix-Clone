import React from "react";
import "./FeatureStyles.css";

function FeatureTitle({ children, ...restProps }) {
  return <h1 {...restProps}>{children}</h1>;
}

export default FeatureTitle;
