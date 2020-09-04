import React from "react";

function CardWrapper({children, ...restProps}) {
  return (
    <div className="card-wrapper"{...restProps}>{children}</div>
  )
}

export default CardWrapper;