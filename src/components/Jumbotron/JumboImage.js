import React from "react";

function JumboImage({...restProps}) {
  return (
    <img className="jumbo-image" {...restProps} />
  )
}

export default JumboImage;
