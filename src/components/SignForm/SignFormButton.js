import React from 'react';

function SignFormButton({ children, ...restProps }) {
  return (
    <button className="sign-form-Button" type="submit" {...restProps}>{children}</button>
  );
}

export default SignFormButton;
