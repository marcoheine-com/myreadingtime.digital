import React from 'react'
import { useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useQuery, useMutation } from 'react-query'
import Button from '../../components/Button'
import {
  useAddToWantToRead,
  useAddToDidRead,
  fetchGoogleBooksVolume,
} from '../../api/api'

import * as ui from './ui'

const ItemPage = () => {
  const { id } = useParams()
  const { isAuthenticated, loginWithRedirect } = useAuth0()
  const { addToWantToRead } = useAddToWantToRead()
  const { addToDidRead } = useAddToDidRead()

  const { isLoading, isFetching, status, error, data } = useQuery(
    ['fetchGoogleBooksVolume', id],
    () => fetchGoogleBooksVolume(id),
    {
      refetchOnWindowFocus: false,
    }
  )

  const {
    mutate: mutateWantToRead,
    status: wantToReadStatus,
    data: wantToReadData,
  } = useMutation(['addToWantToRead'], (wantToReadItem) =>
    addToWantToRead(wantToReadItem)
  )

  const {
    mutate: mutateDidRead,
    status: readStatus,
    data: readData,
  } = useMutation(['addToDidRead'], (readItem) => addToDidRead(readItem))

  const getSecureProtocol = (thumbnail) => {
    const url = thumbnail?.replace(/^http:\/\//i, 'https://')
    return url
  }

  if (isLoading || isFetching)
    return (
      <ui.Main>
        <ui.Loading>Loading...</ui.Loading>
      </ui.Main>
    )

  if (error) return <p>Oh oh! Something went wrong. Please try again!</p>

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
      {status === 'success' && data && (
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
              disabled={
                wantToReadStatus === 'success' && wantToReadData[0].id === id
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
              disabled={readStatus === 'success' && readData[0].id === id}
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
