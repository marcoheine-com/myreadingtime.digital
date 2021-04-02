import { fetchDELETE, fetchGET, fetchPOST } from './api-helpers'
import { BASE_URL } from '../constants/api'
import { useAuth0 } from '@auth0/auth0-react'
const audience = process.env.REACT_APP_WANT_TO_READ

// want-to-read
export const useGetWantToRead = () => {
  const { getAccessTokenSilently, loginWithRedirect } = useAuth0()

  const getWantToRead = async () => {
    try {
      const accessToken = await getAccessTokenSilently({
        audience: `https://${audience}`,
      })

      const response = await fetchGET(
        `${BASE_URL}/api/want-to-read`,
        accessToken
      )

      if (!response.ok) {
        return new Error(response.statusText)
      }

      const data = await response.json()
      return data
    } catch (e) {
      if (e.error === 'login_required') {
        loginWithRedirect()
      }
      if (e.error === 'consent_required') {
        loginWithRedirect()
      }
      return e
    }
  }

  return { getWantToRead }
}

export const useAddToWantToRead = () => {
  const { getAccessTokenSilently, user } = useAuth0()

  const addToWantToRead = async (mutationData) => {
    const { sub } = user

    try {
      const accessToken = await getAccessTokenSilently({
        audience: `https://${audience}`,
      })

      const response = await fetchPOST(
        `${BASE_URL}/api/want-to-read/${mutationData.id}`,
        accessToken,
        {
          sub,
          ...mutationData,
        }
      )

      if (!response.ok) {
        return new Error(response.statusText)
      }

      const data = await response.json()
      return data
    } catch (error) {
      return error
    }
  }

  return { addToWantToRead }
}

export const useDeleteFromWantToRead = () => {
  const { getAccessTokenSilently } = useAuth0()

  const deleteFromWantToRead = async (id) => {
    try {
      const accessToken = await getAccessTokenSilently({
        audience: `https://${audience}`,
      })
      const response = await fetchDELETE(
        `${BASE_URL}/api/want-to-read/${id}`,
        accessToken,
        { id }
      )

      if (!response.ok) {
        return new Error(response.statusText)
      }

      const data = await response.json()
      return data
    } catch (error) {
      return error
    }
  }

  return { deleteFromWantToRead }
}

// did-read

export const useGetDidRead = () => {
  const { getAccessTokenSilently } = useAuth0()

  const getDidRead = async () => {
    try {
      const accessToken = await getAccessTokenSilently({
        audience: `https://${audience}`,
      })

      const response = await fetchGET(`${BASE_URL}/api/did-read`, accessToken)

      if (!response.ok) {
        return new Error(response.statusText)
      }

      const data = await response.json()
      return data
    } catch (error) {
      return error
    }
  }

  return { getDidRead }
}

export const useAddToDidRead = () => {
  const { getAccessTokenSilently, user } = useAuth0()

  const addToDidRead = async (mutationData) => {
    const { sub } = user

    try {
      const accessToken = await getAccessTokenSilently({
        audience: `https://${audience}`,
      })

      const response = await fetchPOST(
        `${BASE_URL}/api/did-read/${mutationData.id}`,
        accessToken,
        {
          sub,
          ...mutationData,
        }
      )

      if (!response.ok) {
        return new Error(response.statusText)
      }

      const data = await response.json()
      return data
    } catch (error) {
      return error
    }
  }

  return { addToDidRead }
}

export const useDeleteFromDidRead = () => {
  const { getAccessTokenSilently } = useAuth0()

  const deleteFromDidRead = async (id) => {
    try {
      const accessToken = await getAccessTokenSilently({
        audience: `https://${audience}`,
      })
      const response = await fetchDELETE(
        `${BASE_URL}/api/did-read/${id}`,
        accessToken,
        { id }
      )

      if (!response.ok) {
        return new Error(response.statusText)
      }

      const data = await response.json()
      return data
    } catch (error) {
      return error
    }
  }

  return { deleteFromDidRead }
}
