import React from "react";
import "./MoviesStyles.css";

function PlayerOverlay({ children, ...restProps }) {
  return (
    <div className="player-overlay" {...restProps}>
      {children}
    </div>
  );
}

export default PlayerOverlay;
