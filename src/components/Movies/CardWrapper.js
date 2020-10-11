import React from "react";
import "./MoviesStyles.css";

function CardWrapper({ children, ...restProps }) {
  return (
    <div className="card-wrapper" {...restProps}>
      {children}
    </div>
  );
}

export default CardWrapper;
