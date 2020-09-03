import React from "react";

function SignFormTitle({children, ...restProps}) {
  return (
    <h1 className="sign-form-title" {...restProps}>{children}</h1>
  )
}

export default SignFormTitle