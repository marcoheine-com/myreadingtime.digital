import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import AuthentificationButton from '../AuthentificationButton'
import * as ui from './ui'

const Navigation = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <ui.Navigation>
      <ui.List>
        {isAuthenticated && (
          <>
            <ui.ListItem>
              <Link to='/search'>Search</Link>{' '}
            </ui.ListItem>
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
        )}
      </ui.List>
      <AuthentificationButton />
    </ui.Navigation>
  )
}

export default Navigation
