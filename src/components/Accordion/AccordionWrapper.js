import React from "react";

function AccordionWrapper({children, ...restProps}) {
  return (
    <div className="accordion-wrapper" {...restProps}>{children}</div>
  )
}

export default AccordionWrapper