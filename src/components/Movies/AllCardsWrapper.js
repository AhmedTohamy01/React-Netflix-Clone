import React from "react";

function AllCardsWrapper({children, ...restProps}) {
  return (
    <div className="all-cards-wrapper"{...restProps}>{children}</div>
  )
}

export default AllCardsWrapper;