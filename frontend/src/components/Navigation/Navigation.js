import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import AuthentificationButton from '../AuthentificationButton'
import * as ui from './ui'

const Navigation = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  return (
    <ui.Navigation>
      <ui.List>
        <ui.ListItem>
          <Link to='/'>Search</Link>{' '}
        </ui.ListItem>

        {isAuthenticated ? (
          <>
            <ui.ListItem>
              <Link to='/want-to-read'>Want to read </Link>
            </ui.ListItem>
            <ui.ListItem>
              <Link to='/currently-reading'>Currently reading</Link>
            </ui.ListItem>
            <ui.ListItem>
              <Link to='/read'>Read </Link>
            </ui.ListItem>
          </>
        ) : (
          <>
            <ui.ListItem>
              <ui.Button onClick={() => loginWithRedirect()}>
                Want to read
              </ui.Button>
            </ui.ListItem>
            <ui.ListItem>
              <ui.Button onClick={() => loginWithRedirect()}>
                Currently reading
              </ui.Button>
            </ui.ListItem>
            <ui.ListItem>
              <ui.Button onClick={() => loginWithRedirect()}>Read</ui.Button>
            </ui.ListItem>
          </>
        )}
      </ui.List>
      <AuthentificationButton />
    </ui.Navigation>
  )
}

export default Navigation
