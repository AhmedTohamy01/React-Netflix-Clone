import React from "react";
import "./JumbotronStyles.css";

function JumboItem({ children, ...restProps }) {
  return (
    <div className="jumbo-item" {...restProps}>
      {children}
    </div>
  );
}

export default JumboItem;
