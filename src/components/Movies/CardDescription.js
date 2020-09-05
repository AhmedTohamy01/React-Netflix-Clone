import React from "react";

function CardDescription({children, ...restProps}) {
  return (
    <div className="card-description"{...restProps}>{children}</div>
  )
}

export default CardDescription;