import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button'
import * as ui from './ui'
import { START_INDEX } from '../../constants/api'

export const SearchForm = ({ onHandleSubmit = () => {}, searchQuery }) => {
  const [query, setQuery] = useState('')
  const history = useHistory()

  useEffect(() => {
    if (!searchQuery) {
      return
    }

    setQuery(searchQuery)
  }, [searchQuery])

  const handleSubmit = (event) => {
    event.preventDefault()
    history.push(`/search?q=${query}&${START_INDEX}=${0}`)
    onHandleSubmit(query)
  }

  const handleReset = () => setQuery('')

  return (
    <ui.SearchContainer>
      <ui.Headline>Search for a book:</ui.Headline>
      <ui.Form onSubmit={handleSubmit} onReset={handleReset}>
        <ui.Searchbar
          type='text'
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={'Harry Potter'}
        />
        <Button type='reset' disabled={query === ''}>
          Reset
        </Button>
        <Button type='submit' disabled={query === ''}>
          Search
        </Button>
      </ui.Form>
    </ui.SearchContainer>
  )
}
