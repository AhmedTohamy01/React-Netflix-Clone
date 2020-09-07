import React from 'react';

function CardFeatureClose({ children, ...restProps }) {
  return (
    <button className="card-feature-close" type="button" {...restProps}>
      {children}
      <img src="./images/icons/close.png" alt="Close" />
    </button>
  );
}

export default CardFeatureClose;
