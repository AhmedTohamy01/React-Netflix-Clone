import React from 'react';

function Seperator({ children, ...restProps }) {
  return (
    <div className="seperator" {...restProps}>{children}</div>
  );
}

export default Seperator;
