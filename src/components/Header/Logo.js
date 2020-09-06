import React from 'react';
import logo from './logo.svg';

function Logo({ children, ...restProps }) {
  return (
    <div>
      <a href="./#/" {...restProps}>
        {children}
        <img className="logo" src={logo} alt="logo" />
      </a>
    </div>
  );
}

export default Logo;
