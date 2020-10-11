import React from "react";
import "./MoviesStyles.css";

function SlideTitle({ children, ...restProps }) {
  return (
    <div className="slide-title" {...restProps}>
      {children}
    </div>
  );
}

export default SlideTitle;
