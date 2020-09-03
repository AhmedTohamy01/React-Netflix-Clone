import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/FirbaseContext';
import HeaderWrapper from '../components/Header/HeaderWrapper';
import NavBar from '../components/Header/NavBar';
import Logo from '../components/Header/Logo';
import FooterCompound from '../compounds/FooterCompound';
import SignFormWrapper from '../components/SignForm/SignFormWrapper';
import SignFormBase from '../components/SignForm/SignFormBase';
import SignFormTitle from '../components/SignForm/SignFormTitle';
import SignFormInput from '../components/SignForm/SignFormInput';
import SignFormButton from '../components/SignForm/SignFormButton';
import SignFormText from '../components/SignForm/SignFormText';
import SignFormLink from '../components/SignForm/SignFormLink';
import SignFormCaptcha from '../components/SignForm/SignFormCaptcha';

function SigninPage() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName ] = useState("");
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const IsInvalid = password === '' || emailAddress === '';

  function handleSubmit(event) {
    event.preventDefault();

    firebase.auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        setEmailAddress('');
        setPassword('');
        history.push('/browse');
      });
  }

  return (
    <>
      <HeaderWrapper className="header-wrapper-home">
        <NavBar className="navbar-signin">
          <Logo />
        </NavBar>
        <SignFormWrapper>
          <SignFormBase onSubmit={handleSubmit} method="POST">
            <SignFormTitle>Sign In</SignFormTitle>
            <SignFormInput
              type="text" 
              placeholder="First Name"
              value={firstName}
              onChange={({target}) => setFirstName(target.value)}
            />
            <SignFormInput
              type="text"
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <SignFormInput
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <SignFormButton disabled={IsInvalid}>Sign In</SignFormButton>
            <SignFormText>
              New to Netflix?
              <SignFormLink href="/signup">Sign up now.</SignFormLink>
            </SignFormText>
            <SignFormCaptcha>
              This page is protected by Google reCAPTCHA to ensure you are not a bot.
            </SignFormCaptcha>
          </SignFormBase>
        </SignFormWrapper>
      </HeaderWrapper>
      <FooterCompound />
    </>
  );
}

export default SigninPage;
