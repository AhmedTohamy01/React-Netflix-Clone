import React from 'react';

function JumboSubTitle({ children, ...restProps }) {
  return (
    <h2 className="jumbo-subtitle" {...restProps}>{children}</h2>
  );
}

export default JumboSubTitle;
