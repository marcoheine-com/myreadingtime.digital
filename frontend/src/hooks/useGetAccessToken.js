import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
const audience = process.env.REACT_APP_WANT_TO_READ

const useGetAccessToken = () => {
  const [accessToken, setAccessToken] = useState()
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()

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

  useEffect(() => {
    if (!isAuthenticated) {
      return
    }

    getAccessToken()
  }, [])

  return accessToken
}

export default useGetAccessToken
