import React from "react";

function JumboImageWrapper({children, ...restProps}) {
  return (
  <div className="jumbo-imagewrapper"{...restProps}>{children}</div>
  )
}


export default JumboImageWrapper; 