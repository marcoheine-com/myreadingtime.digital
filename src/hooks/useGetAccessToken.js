import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
const audience = process.env.REACT_APP_WANT_TO_READ

const useGetAccessToken = () => {
  const [accessToken, setAccessToken] = useState()
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    if (!isAuthenticated) {
      return
    }

    const getAccessToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${audience}`,
        })
        setAccessToken(accessToken)
      } catch (e) {
        console.error(e)
      }
    }

    getAccessToken()
  }, [isAuthenticated, getAccessTokenSilently])

  return accessToken
}

export default useGetAccessToken
