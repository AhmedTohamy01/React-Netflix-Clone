import React from "react";
import "./SignFormStyles.css";

function SignFormButton({ children, ...restProps }) {
  return (
    <button className="sign-form-Button" type="submit" {...restProps}>
      {children}
    </button>
  );
}

export default SignFormButton;
