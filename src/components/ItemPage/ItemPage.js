import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useGoogleBooksApi from '../../hooks/useGoogleBooksApi';
import { API_BASE_URL } from '../../constants/api';

const ItemPage = () => {
  const { state, setUrl } = useGoogleBooksApi();
  const { id } = useParams();

  useEffect(() => {
    setUrl(`${API_BASE_URL}/${id}`);
  }, [id, setUrl]);

  const { isLoading, isError, data } = state;

  return (
    <section>
      <h1>ItemPage</h1>
      {isError && <p>Oh oh! Something went wrong. Please try again!</p>}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data && (
          <>
            <h1>ItemPage with id: {id}</h1>
            <h3>{data.volumeInfo.title}</h3>
          </>
        )
      )}
    </section>
  );
};

export default ItemPage;
