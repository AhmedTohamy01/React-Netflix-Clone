import React from "react";

function AccordionWrapper({children, ...restProps}) {
  return (
    <section className="accordion-wrapper" {...restProps}>{children}</section>
  )
}

export default AccordionWrapper