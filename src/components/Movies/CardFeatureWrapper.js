import React from "react";
import "./MoviesStyles.css";

function CardFeatureWrapper({ children, ...restProps }) {
  return (
    <div className="card-feature-wrapper" {...restProps}>
      {children}
    </div>
  );
}

export default CardFeatureWrapper;
