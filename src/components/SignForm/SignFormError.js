import React from "react";
import "./SignFormStyles.css";

function SignFormError({ children, ...restProps }) {
  return (
    <div className="sign-form-error" {...restProps}>
      {children}
    </div>
  );
}

export default SignFormError;
