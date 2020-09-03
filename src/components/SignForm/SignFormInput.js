import React from "react";

function SignFormInput({children, ...restProps}) {
  return (
    <input className="sign-form-input" {...restProps}>{children}</input>
  )
}

export default SignFormInput