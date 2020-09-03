import React from "react";

function SignFormWrapper({children, ...restProps}) {
  return (
    <div className="sign-form-wrapper" {...restProps}>{children}</div>
  )
}

export default SignFormWrapper; 