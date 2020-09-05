import React from 'react';

function CardImage({ ...restProps }) {
  return (
    <img className="card-image" alt="movie" {...restProps} />
  );
}

export default CardImage;
