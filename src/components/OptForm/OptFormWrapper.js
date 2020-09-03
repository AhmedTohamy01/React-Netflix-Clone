import React from 'react';

function OptFormWrapper({ children, ...restProps }) {
  return (
    <div className="optform-wrapper" {...restProps}>{children}</div>
  );
}

export default OptFormWrapper;
