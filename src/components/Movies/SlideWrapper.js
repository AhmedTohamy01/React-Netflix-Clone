import React from "react";
import "./MoviesStyles.css";

function SlideWrapper({ children, ...restProps }) {
  return (
    <div className="slide-wrapper" {...restProps}>
      {children}
    </div>
  );
}

export default SlideWrapper;
