import React, { useState } from 'react';
import firebase from 'firebase';
import { auth } from '../../firesbase/config';
const Register = () => {
  const [showPhoneLogin, setshowPhoneLogin] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    passwordCheck: '',
  });
  const handleChange = ({ target: { name, value } }) => {
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    const { password, passwordCheck, email } = credentials;
    e.preventDefault();
    if (password === passwordCheck) {
      auth.createUserWithEmailAndPassword(email, password);
    }
  };

  const phoneLogin = () => {
    setshowPhoneLogin(!showPhoneLogin);
  };

  const handleGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log('token ==>', token);
        console.dir(user);
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });
  };

  const loginPhoneloginPhone = () => {
    var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    var number = '+380934572809';
    firebase
      .auth()
      .signInWithPhoneNumber(number, recaptcha)
      .then(function (e) {
        var code = prompt('Enter the otp', '');

        if (code === null) return;

        e.confirm(code)
          .then(function (result) {
            console.log(result.user);

            document.querySelector('label').textContent +=
              result.user.phoneNumber + 'Number verified';
          })
          .catch(function (error) {
            console.error(error);
          });
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          placeholder="passowrd"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="passwordCheck"
          placeholder="repeat passowrd"
          onChange={handleChange}
        ></input>
        <button type="submit">Sign in</button>
      </form>
      <button onClick={handleGoogle}>Sing in with google</button>
      <button onClick={phoneLogin}>phone login</button>
      {showPhoneLogin && (
        <div>
          <p>login with phone</p>
          <div id="recaptcha"></div>
          <button id="sign-in-button" onClick={loginPhoneloginPhone}>
            phone
          </button>
        </div>
      )}
    </>
  );
};

export default Register;
