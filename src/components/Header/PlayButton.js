import React from "react";

function PlayButton({children, ...restProps}) {
  return (
      <button className="play-button" {...restProps}>{children}</button>
  )
}

export default PlayButton;