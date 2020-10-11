import React from "react";
import "./MoviesStyles.css";

function CardDescription({ children, ...restProps }) {
  return (
    <div className="card-description" {...restProps}>
      {children}
    </div>
  );
}

export default CardDescription;
