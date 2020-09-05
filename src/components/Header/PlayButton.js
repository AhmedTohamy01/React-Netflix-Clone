import React from 'react';

function PlayButton({ children, ...restProps }) {
  return (
    <button className="play-button" type="button" {...restProps}>{children}</button>
  );
}

export default PlayButton;
