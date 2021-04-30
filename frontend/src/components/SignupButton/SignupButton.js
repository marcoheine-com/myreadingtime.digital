import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import * as ui from './ui'

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <ui.Button
      className='btn btn-primary btn-block'
      onClick={() =>
        loginWithRedirect({
          screen_hint: 'signup',
        })
      }
    >
      Sign Up
    </ui.Button>
  )
}

export default SignupButton
