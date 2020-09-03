import React from 'react';

function JumboWrapper({ children, ...restProps }) {
  return (
    <section className="jumbo-wrapper" {...restProps}>{children}</section>
  );
}

export default JumboWrapper;
