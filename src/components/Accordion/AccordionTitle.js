import React from "react";

function AccordionTitle({children, ...restProps}) {
  return (
    <h1 className="accordion-title" {...restProps}>{children}</h1>
  )
}


export default AccordionTitle;