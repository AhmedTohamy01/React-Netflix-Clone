import React from "react";
import "./HeaderStyles.css";

function SigninButton({ children, ...restProps }) {
  return (
    <div>
      <a className="signin-button" href="/signin" {...restProps}>
        {children}
      </a>
    </div>
  );
}

export default SigninButton;
