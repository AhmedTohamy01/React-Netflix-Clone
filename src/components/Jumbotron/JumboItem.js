import React from "react";

function JumboItem({children, ...restProps}) {
  return (
    <div className="jumbo-item" {...restProps}>{children}</div>
  )
}

export default JumboItem;

