import React from "react";
import "./SignFormStyles.css";

function SignFormBase({ children, ...restProps }) {
  return (
    <form className="sign-form-base" {...restProps}>
      {children}
    </form>
  );
}

export default SignFormBase;
