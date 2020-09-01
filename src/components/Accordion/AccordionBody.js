import React from "react";


function AccordionBody({children, ...restProps}) {

  return (
    <div className="accordion-body" {...restProps}>{children}</div>
  )
}

export default AccordionBody