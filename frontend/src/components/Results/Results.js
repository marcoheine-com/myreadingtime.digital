import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import BookListItem from '../BookListItem'
import Button from '../Button'
import * as ui from './ui'
import { useAddToWantToRead, useAddToDidRead } from '../../api/api'
import { useMutation } from 'react-query'

const Results = ({ data, searchQuery }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0()
  const { addToWantToRead } = useAddToWantToRead()
  const { addToDidRead } = useAddToDidRead()
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

  return (
    <ui.Results>
      <h2>Searchresults {searchQuery && `for: ${searchQuery}`}</h2>
      <ul>
        {data?.items?.map(({ id, volumeInfo, searchInfo }) => {
          const { authors, title, imageLinks = '' } = volumeInfo
          const { smallThumbnail: thumbnail } = imageLinks
          const result = {
            ...volumeInfo,
            ...imageLinks,
            id,
            ...searchInfo,
          }

          return (
            <ui.ItemWrapper key={`item_${id}`}>
              <BookListItem resultData={result} />

              <ui.Actions>
                <Button
                  onClick={
                    isAuthenticated
                      ? () =>
                          mutateWantToRead({
                            id,
                            authors,
                            thumbnail,
                            title,
                          })
                      : () => loginWithRedirect()
                  }
                  disabled={
                    wantToReadStatus === 'success' &&
                    wantToReadData[0].id === id
                  }
                >
                  Want to read
                </Button>

                <Button
                  onClick={
                    isAuthenticated ? () => {} : () => loginWithRedirect()
                  }
                >
                  Currently reading
                </Button>

                <Button
                  onClick={
                    isAuthenticated
                      ? () =>
                          mutateDidRead({
                            id,
                            authors,
                            thumbnail,
                            title,
                          })
                      : () => loginWithRedirect()
                  }
                  disabled={readStatus === 'success' && readData[0].id === id}
                >
                  Read
                </Button>
              </ui.Actions>
            </ui.ItemWrapper>
          )
        })}
      </ul>
    </ui.Results>
  )
}

export default Results
