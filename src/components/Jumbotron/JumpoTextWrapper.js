import React from "react";
import "./JumbotronStyles.css";

function JumboTextWrapper({ children, ...restProps }) {
  return (
    <div className="jumbo-textwrapper" {...restProps}>
      {children}
    </div>
  );
}

export default JumboTextWrapper;
