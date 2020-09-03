import React from "react";

function SignFormLink({children, ...restProps}) {
  return (
  <a className="sign-form-link" {...restProps}>{children}</a>
  )
}


export default SignFormLink;