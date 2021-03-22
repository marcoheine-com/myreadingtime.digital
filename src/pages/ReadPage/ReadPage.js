import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getDidRead, deleteFromDidRead } from '../../api'
import BookListItem from '../../components/BookListItem'
import Button from '../../components/Button'
import * as ui from './ui'
import useGetAccessToken from '../../hooks/useGetAccessToken'

const ReadPage = () => {
  const [results, setResults] = useState()
  const accessToken = useGetAccessToken()

  useEffect(() => {
    if (!accessToken) {
      return
    }
    const onGetWantToRead = async () => {
      const results = await getDidRead(accessToken)
      setResults(results)
    }

    onGetWantToRead()
  }, [accessToken])

  const handleDelete = async (bookId) => {
    const results = await deleteFromDidRead(accessToken, bookId)
    setResults(results)
  }

  return (
    <ui.Main>
      <ui.Headline>Read</ui.Headline>
      {results?.length === 0 ? (
        <ui.NoData>
          <p>You have no books on your "Read" - list yet.</p>
          <p>
            Head over to the <Link to='/'>Search Page</Link> and add some!
          </p>
        </ui.NoData>
      ) : (
        <>
          <ul>
            {results?.map((result) => (
              <ui.ItemWrapper key={`item_${result.bookId}`}>
                <BookListItem resultData={result} />
                <Button onClick={() => handleDelete(result.bookId)}>
                  Remove from "Read" - list
                </Button>
              </ui.ItemWrapper>
            ))}
          </ul>
        </>
      )}
    </ui.Main>
  )
}

export default ReadPage
