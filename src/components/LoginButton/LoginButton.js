import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import * as ui from './ui';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <ui.Button
      className='btn btn-primary btn-block'
      onClick={() => loginWithRedirect()}
    >
      Log In
    </ui.Button>
  );
};

export default LoginButton;
