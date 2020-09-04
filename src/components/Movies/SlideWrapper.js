import React from "react";

function SlideWrapper({children, ...restProps}) {
  return (
    <div className="slide-wrapper"{...restProps}>{children}</div>
  )
}

export default SlideWrapper;