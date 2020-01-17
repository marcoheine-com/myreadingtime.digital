import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState('Harry Potter');
  const [url, setUrl] = useState('https://www.googleapis.com/books/v1/volumes?q=harrypotter');

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

  
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setIsError(false);
  
      try {
        const { data } = await axios.get(url);
  
        setData(data);
      } catch (error) {
        console.error(error);
  
        setIsError(true);
      }
      setIsLoading(false);
    };

    getData();
  }, [url]);

  return (
    <div className="App">
      <h1>myreadingtime.digital</h1>
      <p>Search for a book:</p>
      <form
        onSubmit={event => {
          setUrl(`${BASE_URL}${query}`);
          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button
          type="submit"
        >
          Search
        </button>
      </form>

      {isError && <p>Oh oh! Something went wrong. Please try again!</p>}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {console.log(data)}
          {data && data.items.map(item => {
            return (
              <li key={`item_${item.id}`}>
                {item.volumeInfo.title}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
