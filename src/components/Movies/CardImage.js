import React from "react";
import "./MoviesStyles.css";

function CardImage({ ...restProps }) {
  return <img className="card-image" alt="movie" {...restProps} />;
}

export default CardImage;
