import React from 'react'
import { Link } from 'react-router-dom'
import { useGetDidRead, useDeleteFromDidRead } from '../../api/api'
import BookListItem from '../../components/BookListItem'
import Button from '../../components/Button'
import * as ui from './ui'
import { useQuery, useMutation, useQueryClient } from 'react-query'

const ReadPage = () => {
  const { getDidRead } = useGetDidRead()
  const { deleteFromDidRead } = useDeleteFromDidRead()
  const queryClient = useQueryClient()
  const { status, error, data } = useQuery('getDidRead', getDidRead)
  const { mutate } = useMutation(
    'deleteFromDidRead',
    (didReadItem) => deleteFromDidRead(didReadItem),
    {
      onSuccess: (data) => queryClient.setQueryData('getDidRead', data),
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
      <ui.Headline>Read</ui.Headline>
      {data?.length === 0 ? (
        <ui.NoData>
          <p>You have no books on your "Read" - list yet.</p>
          <p>
            Head over to the <Link to='/'>Search Page</Link> and add some!
          </p>
        </ui.NoData>
      ) : (
        <>
          <ul>
            {data?.map((result) => (
              <ui.ItemWrapper key={`item_${result.id}`}>
                <BookListItem resultData={result} />
                <Button onClick={() => mutate(result.id)}>
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
