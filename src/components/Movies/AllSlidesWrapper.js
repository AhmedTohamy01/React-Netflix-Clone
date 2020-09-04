import React from "react";

function AllSlidesWrapper({children, ...restProps}) {
  return (
    <div className="all-slides-wrapper"{...restProps}>{children}</div>
  )
}

export default AllSlidesWrapper;