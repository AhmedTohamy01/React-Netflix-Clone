import React from "react";

function SignFormText({children, ...restProps}) {
  return (
    <p className="sign-form-text" {...restProps}>{children}</p>
  )
}

export default SignFormText