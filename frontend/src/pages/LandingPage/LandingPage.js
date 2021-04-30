import React from 'react'
import * as ui from './ui'
import { useAuth0 } from '@auth0/auth0-react'
import Features from '../../components/Features'
import { SearchForm } from '../../components/SearchFom'

export const LandingPage = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <ui.Main>
      {isAuthenticated && <SearchForm />}
      <Features />
    </ui.Main>
  )
}
