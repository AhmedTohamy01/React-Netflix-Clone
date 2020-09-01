import React from "react";

function AccordionItem({children, ...restProps}) {
  return (
    <div className="accordion-item" {...restProps}>{children}</div>
  )
}

export default AccordionItem