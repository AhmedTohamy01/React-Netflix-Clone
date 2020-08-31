import React from "react";

function EmailFormWrapper({children, ...restProps}) {
  return (
    <div className="optform-wrapper" {...restProps}>{children}</div>
  )
}

export default EmailFormWrapper;