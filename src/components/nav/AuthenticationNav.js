import React from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firesbase/config';
export const AuthenticationNav = () => {
  const signOut = () => {
    auth.signOut();
  };
  const history = useHistory();
  return (
    <>
      <button
        onClick={() =>
          history.push({
            pathname: '/',
          })
        }
      >
        News
      </button>
      <button
        onClick={() =>
          history.push({
            pathname: '/profile',
          })
        }
      >
        Profile
      </button>
      <button onClick={signOut}>sign out</button>
    </>
  );
};
