import React from "react";
import "./MoviesStyles.css";

function PlayerVideo({ children, ...restProps }) {
  return (
    <video className="player-video" controls {...restProps}>
      <source {...restProps} />
    </video>
  );
}

export default PlayerVideo;
