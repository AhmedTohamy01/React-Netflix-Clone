import React from "react";

function optFormText({children, ...restProps}) {
  return (
    <div className="optform-text" {...restProps}>{children}</div>
  )
}

export default optFormText;