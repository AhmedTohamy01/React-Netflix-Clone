import React from 'react';

function FooterTitle({ children, ...restProps }) {
  return (
    <a href="#" className="footer-title" {...restProps}>{children}</a>
  );
}

export default FooterTitle;
