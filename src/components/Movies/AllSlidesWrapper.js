import React from "react";
import "./MoviesStyles.css";

function AllSlidesWrapper({ children, ...restProps }) {
  return (
    <div className="all-slides-wrapper" {...restProps}>
      {children}
    </div>
  );
}

export default AllSlidesWrapper;
