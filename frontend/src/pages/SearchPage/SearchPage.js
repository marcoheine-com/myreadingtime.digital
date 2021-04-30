import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { fetchGoogleBooksVolumes } from '../../api/api'
import Results from '../../components/Results'
import Button from '../../components/Button'
import { SearchForm } from '../../components/SearchFom'
import { START_INDEX } from '../../constants/api'
import * as ui from './ui'

const App = () => {
  const history = useHistory()
  const location = useLocation()
  const { isAuthenticated } = useAuth0()

  const [query, setQuery] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [orderBy, setOrderBy] = useState('relevance')
  const [filter, setFilter] = useState('FILTER_UNDEFINED')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (location.search === '') {
      return
    }

    const searchParams = new URLSearchParams(location.search)

    setQuery(searchParams.get('q'))
    setSearchQuery(searchParams.get('q'))
  }, [location.search])

  const { isLoading, isFetching, status, error, data } = useQuery(
    ['fetchGoogleBooksVolumes', searchQuery, index, orderBy, filter],
    () => fetchGoogleBooksVolumes(searchQuery, index, orderBy, filter),
    {
      enabled: searchQuery !== '',
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  )

  const handleSubmit = (query, orderBy) => {
    setSearchQuery(query)
  }

  const handleOrderByChange = (event) => setOrderBy(event.target.value)

  const handleFilterChange = (event) => setFilter(event.target.value)

  const handleOnClick = (index) => {
    history.push(`?q=${searchQuery}&${START_INDEX}=${index}`)
    setIndex(index)
  }

  if (!isAuthenticated) {
    return <ui.Main>Please login to use the search.</ui.Main>
  }

  return (
    <ui.Main>
      <SearchForm onHandleSubmit={handleSubmit} searchQuery={searchQuery} />

      {error && <p>Oh oh! Something went wrong. Please try again!</p>}

      {isLoading || isFetching ? (
        <ui.Loading>Loading...</ui.Loading>
      ) : (
        status === 'success' &&
        data && (
          <>
            <ui.Filter>
              <label for='orderBy'>Order by:</label>
              <select
                value={orderBy}
                name='orderBy'
                id='orderBy'
                onChange={handleOrderByChange}
              >
                <option value='relevance'>Relevance</option>
                <option value='newest'>Newest</option>
              </select>

              <label for='filter'>Filter:</label>
              <select
                value={filter}
                name='filter'
                id='filter'
                onChange={handleFilterChange}
              >
                <option value='FILTER_UNDEFINED'>No Filter</option>
                <option value='ebooks'>E-Books</option>
                <option value='free-ebooks'>Free E-Books</option>
                <option value='paid-ebooks'>Paid E-Books</option>
                <option value='full'>Full</option>
                <option value='partial'>Partial</option>
              </select>
            </ui.Filter>
            <Results data={data} searchQuery={searchQuery} />

            <ui.Slot>
              <Button
                disabled={query === '' || index === 0}
                onClick={() => handleOnClick(index - 10)}
              >
                Previous Page
              </Button>
              <Button
                disabled={query === ''}
                onClick={() => handleOnClick(index + 10)}
              >
                Next Page
              </Button>
            </ui.Slot>
          </>
        )
      )}
    </ui.Main>
  )
}

export default App
