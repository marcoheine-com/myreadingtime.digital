import * as ui from './ui'
import React from 'react'
import { Link } from 'react-router-dom'
import { useGetWantToRead, useDeleteFromWantToRead } from '../../api/api'
import BookListItem from '../../components/BookListItem'
import Button from '../../components/Button'
import { useQuery, useMutation, useQueryClient } from 'react-query'

const WantToReadPage = () => {
  const { getWantToRead } = useGetWantToRead()
  const { deleteFromWantToRead } = useDeleteFromWantToRead()
  const queryClient = useQueryClient()
  const { status, error, data } = useQuery('getWantToRead', getWantToRead)
  const { mutate } = useMutation(
    'deleteFromDidRead',
    (wantToReadItem) => deleteFromWantToRead(wantToReadItem),
    {
      onSuccess: (data) => queryClient.setQueryData('getWantToRead', data),
    }
  )

  if (status === 'loading') {
    return (
      <ui.Main>
        <p>Loading...</p>
      </ui.Main>
    )
  }

  if (status === 'error') {
    return (
      <ui.Main>
        <p>Error: {error.message}</p>
      </ui.Main>
    )
  }

  return (
    <ui.Main>
      <ui.Headline>Want to read</ui.Headline>
      {data?.length === 0 ? (
        <ui.NoData>
          <p>You have no books on your "Want to read" - list yet.</p>
          <p>
            Head over to the <Link to='/'>Search Page</Link> and add some!
          </p>
        </ui.NoData>
      ) : (
        <ul>
          {data &&
            data.map((result) => (
              <ui.ItemWrapper key={`item_${result.id}`}>
                <BookListItem resultData={result} />
                <Button onClick={() => mutate(result.id)}>
                  Remove from "Want to Read" - list
                </Button>
              </ui.ItemWrapper>
            ))}
        </ul>
      )}
    </ui.Main>
  )
}

export default WantToReadPage
