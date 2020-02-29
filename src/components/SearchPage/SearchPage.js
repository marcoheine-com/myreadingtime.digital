import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';

import Results from '../Results';
import useGoogleBooksAPI from '../../hooks/useGoogleBooksApi';
import { API_BASE_URL, START_INDEX } from '../../constants/api';

export const Main = styled.main`
  margin: 0 auto;
  max-width: 600px;
`;

const App = () => {
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [index, setIndex] = useState(0);

  const { state, setUrl } = useGoogleBooksAPI();
  const { isLoading, isError, data } = state;
  const location = useLocation();
  const history = useHistory();

  const handleSubmit = event => {
    setSearchQuery(query);
    event.preventDefault();
    history.push(`?q=${query}&${START_INDEX}=${index}`);
  };

  const handleOnclick = () => {
    setIndex(index + 10);
    history.push(`?q=${query}&${START_INDEX}=${index}`);
  };

  useEffect(() => {
    if (location.search === '') return;

    setUrl(`${API_BASE_URL}${location.search}`);
  }, [location.search, setUrl]);

  return (
    <Main>
      <h1>myreadingtime.digital</h1>
      <p>Search for a book:</p>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={query}
          onChange={event => setQuery(event.target.value)}
          placeholder='Harry Potter'
        />
        <button type='submit' disabled={query === ''}>
          Search
        </button>
      </form>

      {isError && <p>Oh oh! Something went wrong. Please try again!</p>}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data && (
          <>
            <Results data={data} searchQuery={searchQuery} />
            <button onClick={handleOnclick} disabled={query === ''}>
              Load more books
            </button>
          </>
        )
      )}
    </Main>
  );
};

export default App;
