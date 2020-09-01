import React from "react";

function JumboWrapper({children, ...restProps}) {
  return (
  <div className="jumbo-wrapper"{...restProps}>{children}</div>
  )
}


export default JumboWrapper; 