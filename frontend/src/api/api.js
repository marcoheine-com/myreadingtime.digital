import { fetchDELETE, fetchGET, fetchPOST, fetchGETNoAuth } from './api-helpers'
import { BASE_URL, GOOGLE_BOOKS_BASE_URL } from '../constants/api'
import { useAuth0 } from '@auth0/auth0-react'
const audience = process.env.REACT_APP_WANT_TO_READ

// want-to-read
export const useGetWantToRead = () => {
  const { getAccessTokenSilently } = useAuth0()

  const getWantToRead = async () => {
    try {
      const accessToken = await getAccessTokenSilently()

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
        audience,
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
        audience,
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
        audience,
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
        audience,
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
        audience,
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

// Google Books API

export const fetchGoogleBooksVolumes = async (
  query,
  index,
  orderBy,
  filter
) => {
  try {
    const response = await fetchGETNoAuth(
      `${GOOGLE_BOOKS_BASE_URL}?q=${query}&startIndex=${index}&orderBy=${orderBy}&filter=${filter}`
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

export const fetchGoogleBooksVolume = async (id) => {
  try {
    const response = await fetchGETNoAuth(`${GOOGLE_BOOKS_BASE_URL}/${id}`)

    if (!response.ok) {
      return new Error(response.statusText)
    }

    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}
