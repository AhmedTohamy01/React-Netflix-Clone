import React from 'react';

function PlayerVideo({ children, ...restProps }) {
  return (
    <video className="player-video" controls {...restProps}>
      <source {...restProps} />
    </video>
  );
}

export default PlayerVideo;
