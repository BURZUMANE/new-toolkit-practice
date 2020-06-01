import React from 'react';
import { UnAuthenticationNav } from './UnAuthenticationNav';
import { AuthenticationNav } from './AuthenticationNav';

export const Navigation = ({ isAuthentication }) => {
  let content = <AuthenticationNav />;

  if (!isAuthentication) {
    content = <UnAuthenticationNav />;
  }

  return content;
};
