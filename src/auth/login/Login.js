import React, { useState, useEffect } from 'react';
import { auth } from '../../firesbase/config';

// import { useDispatch } from 'react-redux';
// import { signInUser } from '../../redux/auth/authOperations';
const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  // const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(signInUser(credentials));
    auth
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  };
  const handleChange = ({ target: { name, value } }) => {
    setCredentials((prev) => ({ ...prev, [name]: value }));
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
        <button type="submit">login</button>
      </form>
    </>
  );
};

export default Login;
