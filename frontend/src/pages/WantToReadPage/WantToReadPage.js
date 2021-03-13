import * as ui from './ui'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getWantToRead, deleteFromWantToRead } from '../../api'
import BookListItem from '../../components/BookListItem'
import Button from '../../components/Button'
import useGetAccessToken from '../../hooks/useGetAccessToken'

const WantToReadPage = () => {
  const [results, setResults] = useState()
  const accessToken = useGetAccessToken()

  useEffect(() => {
    if (!accessToken) {
      return
    }
    onGetWantToRead()
  }, [accessToken])

  const onGetWantToRead = async () => {
    const results = await getWantToRead(accessToken)
    setResults(results)
  }

  const handleDelete = async (bookId) => {
    const results = await deleteFromWantToRead(accessToken, bookId)
    setResults(results)
  }

  return (
    <ui.Main>
      <ui.Headline>Want to read</ui.Headline>
      {results?.length === 0 ? (
        <ui.NoData>
          <p>You have no books on your "Want to read" - list yet.</p>
          <p>
            Head over to the <Link to="/">Search Page</Link> and add some!
          </p>
        </ui.NoData>
      ) : (
        <>
          <ul>
            {results?.map((result) => (
              <ui.ItemWrapper key={`item_${result.bookId}`}>
                <BookListItem resultData={result} />
                <Button onClick={() => handleDelete(result.bookId)}>
                  Remove from "Want to Read" - list
                </Button>
              </ui.ItemWrapper>
            ))}
          </ul>
        </>
      )}
    </ui.Main>
  )
}

export default WantToReadPage
