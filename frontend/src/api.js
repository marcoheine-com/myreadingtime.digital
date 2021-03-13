export const getWantToRead = async (accessToken) => {
  try {
    const response = await fetch(`/api/want-to-read`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })

    if (!response.ok) {
      return new Error(response.statusText)
    }

    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}

export const addToWantToRead = async (
  bookId,
  authors,
  thumbnail,
  title,
  userId,
  accessToken
) => {
  try {
    const response = await fetch(`/api/want-to-read/${bookId}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        userId,
        bookId,
        authors,
        thumbnail,
        title,
      }),
    })

    if (!response.ok) {
      return new Error(response.statusText)
    }

    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}

export const deleteFromWantToRead = async (accessToken, bookId) => {
  try {
    const response = await fetch(`/api/want-to-read/${bookId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ bookId }),
    })

    if (!response.ok) {
      return new Error(response.statusText)
    }

    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}
