import React from 'react';

function optFormButton({ children, ...restProps }) {
  return (
    <div className="optform-button" {...restProps}>
      {children}
      <img className="optform-button-image" src="/images/icons/chevron-right.png" alt="Try Now" />
    </div>
  );
}

export default optFormButton;
