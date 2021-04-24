import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import * as ui from './ui';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <ui.Button
      className='btn btn-danger btn-block'
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </ui.Button>
  );
};

export default LogoutButton;
