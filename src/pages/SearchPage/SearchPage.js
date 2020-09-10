import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useGoogleBooksAPI from '../../hooks/useGoogleBooksApi';

import Results from '../../components/Results';
import Features from '../../components/Features';
import Button from '../../components/Button';
import { API_BASE_URL, START_INDEX } from '../../constants/api';

import * as ui from './ui';

const App = () => {
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [index, setIndex] = useState(0);

  const { state, setUrl } = useGoogleBooksAPI();
  const { isLoading, isError, data } = state;

  const location = useLocation();
  const history = useHistory();

  const handleSubmit = (event) => {
    setSearchQuery(query);
    event.preventDefault();
    history.push(`?q=${query}&${START_INDEX}=${index}`);
  };

  const handleOnClick = () => {
    setIndex(index + 10);
    history.push(`?q=${query}&${START_INDEX}=${index}`);
  };

  useEffect(() => {
    if (location.search === '') return;

    setUrl(`${API_BASE_URL}${location.search}`);
  }, [location.search, setUrl]);

  return (
    <ui.Main>
      <ui.SearchContainer>
        <ui.Headline>Search for a book:</ui.Headline>
        <ui.Form onSubmit={handleSubmit}>
          <ui.Searchbar
            type='text'
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder='Harry Potter'
          />
          <Button type='submit' disabled={query === ''}>
            Search
          </Button>
        </ui.Form>
      </ui.SearchContainer>

      {isError && <p>Oh oh! Something went wrong. Please try again!</p>}

      {isLoading ? (
        <ui.Loading>Loading...</ui.Loading>
      ) : (
        data && (
          <>
            <Results data={data} searchQuery={searchQuery} />
            <Button onClick={handleOnClick} disabled={query === ''}>
              Load more books
            </Button>
          </>
        )
      )}

      <Features />
    </ui.Main>
  );
};

export default App;
