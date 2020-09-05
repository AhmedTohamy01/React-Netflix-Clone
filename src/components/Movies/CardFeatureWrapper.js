import React from 'react';

function CardFeatureWrapper({ children, ...restProps }) {
  return (
    <div className="card-feature-wrapper" {...restProps}>{children}</div>
  );
}

export default CardFeatureWrapper;
