import React from "react";


function AccordionHeader({children, ...restProps}) {

  return (
    <div className="accordion-header" {...restProps}>{children}</div>
  )
}

export default AccordionHeader