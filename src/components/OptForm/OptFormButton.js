import React from "react";
import "./OptFormStyles.css";

function optFormButton({ children, ...restProps }) {
  return (
    <div>
      <a className="optform-button" href="/signup" {...restProps}>
        {children}
        <img
          className="optform-button-image"
          src="../images/icons/chevron-right.png"
          alt="Try Now"
        />
      </a>
    </div>
  );
}

export default optFormButton;
