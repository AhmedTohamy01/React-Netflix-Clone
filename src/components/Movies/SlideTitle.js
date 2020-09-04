import React from "react";

function SlideTitle({children, ...restProps}) {
  return (
    <div className="slide-title"{...restProps}>{children}</div>
  )
}

export default SlideTitle;