import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useGoogleBooksApi from '../../hooks/useGoogleBooksApi'
import { useAuth0 } from '@auth0/auth0-react'
import { useMutation } from 'react-query'
import Button from '../../components/Button'
import { API_BASE_URL } from '../../constants/api'
import { useAddToWantToRead, useAddToDidRead } from '../../api/api'

import * as ui from './ui'

const ItemPage = () => {
  const { state, setUrl } = useGoogleBooksApi()
  const { id } = useParams()
  const { isAuthenticated, loginWithRedirect } = useAuth0()
  const { addToWantToRead } = useAddToWantToRead()
  const { addToDidRead } = useAddToDidRead()
  const { mutate: mutateWantToRead } = useMutation(
    'addToWantToRead',
    (wantToReadItem) => addToWantToRead(wantToReadItem)
  )

  const { mutate: mutateDidRead } = useMutation(
    'addToDidRead',
    (wantToReadItem) => addToDidRead(wantToReadItem)
  )

  useEffect(() => {
    setUrl(`${API_BASE_URL}/${id}`)
  }, [id, setUrl])

  const getSecureProtocol = (thumbnail) => {
    const url = thumbnail?.replace(/^http:\/\//i, 'https://')
    return url
  }

  const { isLoading, isError, isSuccess, data } = state

  if (isLoading) return <ui.Loading>Loading...</ui.Loading>

  if (isError || !isSuccess)
    return <p>Oh oh! Something went wrong. Please try again!</p>

  const { volumeInfo = {}, saleInfo = {} } = data
  const {
    title,
    authors,
    publishedDate,
    publisher,
    pageCount,
    averageRating,
    ratingsCount,
    categories,
    imageLinks = {},
    description,
  } = volumeInfo
  const { smallThumbnail: thumbnail } = imageLinks

  const { listPrice } = saleInfo

  return (
    <ui.Main>
      {data && (
        <>
          <h3>{title}</h3>

          {authors &&
            authors.map((author) => <h4 key={author}>by {author}</h4>)}
          <p>{publishedDate}</p>
          <p>{publisher}</p>

          <p>{pageCount} pages</p>

          {averageRating && (
            <p>rating: {`${averageRating}/5 (${ratingsCount})`}</p>
          )}

          {listPrice && <p>price: {`${listPrice.amount}€`}</p>}

          {categories && (
            <ul>
              {categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          )}

          {thumbnail && (
            <img
              alt={`Thumbnail of ${title}`}
              src={getSecureProtocol(thumbnail)}
              loading='lazy'
            ></img>
          )}
          <p>
            <i
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </p>
          <ui.Actions>
            <Button
              onClick={
                isAuthenticated
                  ? () => {
                      mutateWantToRead({
                        id,
                        authors,
                        thumbnail,
                        title,
                      })
                    }
                  : () => loginWithRedirect()
              }
            >
              Want to read
            </Button>

            <Button
              onClick={isAuthenticated ? () => {} : () => loginWithRedirect()}
            >
              Currently reading
            </Button>

            <Button
              onClick={
                isAuthenticated
                  ? () => {
                      mutateDidRead({
                        id,
                        authors,
                        title,
                        thumbnail,
                      })
                    }
                  : () => loginWithRedirect()
              }
            >
              Read
            </Button>
          </ui.Actions>
        </>
      )}
    </ui.Main>
  )
}

export default ItemPage
