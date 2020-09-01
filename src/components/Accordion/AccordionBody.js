import React from "react";


function AccordionBody({children, ...restProps}) {

  return (
    <div {...restProps}>{children}</div>
  )
}

export default AccordionBody