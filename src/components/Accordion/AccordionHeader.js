import React, { useContext } from "react";
import AccordionContext from "./AccordionContext";
import "./AccordionStyles.css";

function AccordionHeader({ children, ...restProps }) {
  const [AccordionShow, setAccordionShow] = useContext(AccordionContext);

  function handleClick() {
    setAccordionShow(!AccordionShow);
  }

  return (
    <div className="accordion-header" onClick={handleClick} {...restProps}>
      {children}
      {AccordionShow ? (
        <img
          className="accordion-image"
          src="../images/icons/close-slim.png"
          alt="Close"
        />
      ) : (
        <img
          className="accordion-image"
          src="../images/icons/add.png"
          alt="Open"
        />
      )}
    </div>
  );
}

export default AccordionHeader;
