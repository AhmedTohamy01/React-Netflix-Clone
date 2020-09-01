import React from "react";

function FooterColumn({children, ...restProps}) {
  return (
    <div  className="footer-column" {...restProps}>{children}</div>
  )
}

export default FooterColumn;