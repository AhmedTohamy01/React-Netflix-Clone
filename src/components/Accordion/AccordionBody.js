import React, { useContext } from "react";
import AccordionContext from "./AccordionContext";
import "./AccordionStyles.css";

function AccordionBody({ children, ...restProps }) {
  const [AccordionShow, setAccordionShow] = useContext(AccordionContext);

  return AccordionShow ? (
    <div className="accordion-body" {...restProps}>
      {children}
    </div>
  ) : null;
}
export default AccordionBody;
