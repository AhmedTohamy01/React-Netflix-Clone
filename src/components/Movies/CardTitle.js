import React from 'react';

function CardTitle({ children, ...restProps }) {
  return (
    <h1 className="card-title" {...restProps}>{children}</h1>
  );
}

export default CardTitle;
