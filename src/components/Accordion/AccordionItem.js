import React, { useState } from "react";
import AccordionContext from "./AccordionContext";
import "./AccordionStyles.css";

function AccordionItem({ children, ...restProps }) {
  const [AccordionShow, setAccordionShow] = useState(false);
  return (
    <AccordionContext.Provider
      value={[AccordionShow, setAccordionShow]}
      {...restProps}
    >
      <div className="accordion-item">{children}</div>
    </AccordionContext.Provider>
  );
}

export default AccordionItem;
