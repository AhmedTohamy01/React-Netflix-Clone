import React from "react";

function FeatureWrapper({children, ...restProps}) {
  return (
    <div {...restProps}>{children}</div>
  )
}

export default FeatureWrapper;