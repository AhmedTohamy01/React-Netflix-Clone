import React from 'react';

function PlayerOverlay({ children, ...restProps }) {
  return (
    <div className="player-overlay" {...restProps}>{children}</div>
  );
}

export default PlayerOverlay;
