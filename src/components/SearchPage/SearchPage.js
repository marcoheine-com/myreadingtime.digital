import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';

import Results from '../Results';
import { API_BASE_URL, START_INDEX } from '../../constants/api';

import * as ui from '../../ui';

const App = () => {
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [index, setIndex] = useState(0);

  const fetchData = async () => {
    const response = await fetch(`${API_BASE_URL}?q=${query}`);
    const data = await response.json();
    return data;
  };

  const { isLoading, isError, data, refetch } = useQuery('books', fetchData, {
    enabled: false,
  });

  const history = useHistory();

  const handleSubmit = (event) => {
    refetch();
    setSearchQuery(query);
    event.preventDefault();
    history.push(`?q=${query}&${START_INDEX}=${index}`);
  };

  const handleOnClick = () => {
    setIndex(index + 10);
    history.push(`?q=${query}&${START_INDEX}=${index}`);
  };

  return (
    <ui.Main>
      <h1>myreadingtime.digital</h1>
      <p>Search for a book:</p>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={query}
          onChange={(event) => setQuery(event.target.value)}
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

            <button onClick={handleOnClick} disabled={query === ''}>
              Load more books
            </button>
          </>
        )
      )}
    </ui.Main>
  );
};

export default App;
