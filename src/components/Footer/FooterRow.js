import React from "react";

function FooterRow({children, ...restProps}) {
  return (
    <div className="footer-row" {...restProps}>{children}</div>
  )
}

export default FooterRow;