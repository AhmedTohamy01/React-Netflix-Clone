import React from "react";

function SignFormButton({children, ...restProps}) {
  return (
    <button className="sign-form-Button"{...restProps}>{children}</button>
  )
}

export default SignFormButton