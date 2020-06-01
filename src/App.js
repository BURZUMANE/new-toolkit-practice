import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRoute } from './router';
import { auth } from './firesbase/config';

import './App.css';
import { Navigation } from './components/nav/Navigation';

function App() {
  const [isAuth, setisAuth] = useState(null);
  useEffect(() => {
    onAuth();
    console.log('auth', isAuth);
    // showUser();
  }, [isAuth]);
  const onAuth = () => {
    auth.onAuthStateChanged((user) => {
      setisAuth(user);
    });
  };
  // const showUser = () => {
  //   auth.onAuthStateChanged(function (user) {
  //     if (user) {
  //       // User is signed in.
  //       const email = user.email;
  //       const uid = user.uid;
  //       console.log(email);
  //       console.log(uid);
  //       // ...
  //     } else {
  //       // User is signed out.
  //       // ...
  //     }
  //   });
  // };
  const routing = useRoute(isAuth);
  return (
    <div className="container">
      <Navigation isAuthentication={isAuth} />
      {routing}
    </div>
  );
}

export default App;
