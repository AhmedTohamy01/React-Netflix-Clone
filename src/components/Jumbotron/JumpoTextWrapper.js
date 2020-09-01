import React from "react";

function JumboTextWrapper({children, ...restProps}) {
  return (
  <div className="jumbo-textwrapper"{...restProps}>{children}</div>
  )
}


export default JumboTextWrapper; 