import React from 'react';

function JumboImage({ ...restProps }) {
  return (
    <img className="jumbo-image" alt="" {...restProps} />
  );
}

export default JumboImage;
