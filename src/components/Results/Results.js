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
  const { mutate: mutateWantToRead } = useMutation(
    ['addToWantToRead'],
    (wantToReadItem) => addToWantToRead(wantToReadItem)
  )

  const { mutate: mutateDidRead } = useMutation(
    ['addToDidRead'],
    (wantToReadItem) => addToDidRead(wantToReadItem)
  )

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
