import React from "react";

function CardImage({children, ...restProps}) {
  return (
    <img className="card-image"{...restProps}>{children}</img>
  )
}

export default CardImage;