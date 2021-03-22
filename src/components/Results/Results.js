import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import BookListItem from '../BookListItem'
import Button from '../Button'
import * as ui from './ui'
import useGetAccessToken from '../../hooks/useGetAccessToken'
import { addToWantToRead, addToDidRead } from '../../api'

const Results = ({ data, searchQuery }) => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0()
  const accessToken = useGetAccessToken()

  const handleAddToWantToRead = (id, authors, smallThumbnail, title) => {
    addToWantToRead(id, authors, smallThumbnail, title, user.sub, accessToken)
  }

  const handleAddToDidRead = (id, authors, smallThumbnail, title) => {
    addToDidRead(id, authors, smallThumbnail, title, user.sub, accessToken)
  }

  return (
    <ui.Results>
      <h2>Searchresults {searchQuery && `for: ${searchQuery}`}</h2>
      <ul>
        {data.items.map(({ id: bookId, volumeInfo, searchInfo }) => {
          const { authors, title, imageLinks = '' } = volumeInfo
          const { smallThumbnail: thumbnail } = imageLinks
          const result = {
            ...volumeInfo,
            ...imageLinks,
            bookId,
            ...searchInfo,
          }

          return (
            <ui.ItemWrapper key={`item_${bookId}`}>
              <BookListItem resultData={result} />

              <ui.Actions>
                <Button
                  onClick={
                    isAuthenticated
                      ? () =>
                          handleAddToWantToRead(
                            bookId,
                            authors,
                            thumbnail,
                            title
                          )
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
                          handleAddToDidRead(bookId, authors, thumbnail, title)
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
