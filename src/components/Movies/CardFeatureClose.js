import React from "react";
import "./MoviesStyles.css";

function CardFeatureClose({ children, ...restProps }) {
  return (
    <button className="card-feature-close" type="button" {...restProps}>
      {children}
      <img src="../images/icons/close.webp" alt="Close" />
    </button>
  );
}

export default CardFeatureClose;
