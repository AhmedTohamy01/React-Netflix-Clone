import React from "react";


function AccordionHeader({children, ...restProps}) {

  return (
    <div {...restProps}>{children}</div>
  )
}

export default AccordionHeader