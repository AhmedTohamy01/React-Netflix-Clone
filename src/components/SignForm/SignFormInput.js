import React from "react";
import "./SignFormStyles.css";

function SignFormInput({ ...restProps }) {
  return <input className="sign-form-input" {...restProps} />;
}

export default SignFormInput;
