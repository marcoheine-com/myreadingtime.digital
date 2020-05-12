import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useGoogleBooksApi from '../../hooks/useGoogleBooksApi';
import { API_BASE_URL } from '../../constants/api';

import * as ui from '../../ui';

const ItemPage = () => {
  const { state, setUrl } = useGoogleBooksApi();
  const { id } = useParams();

  useEffect(() => {
    setUrl(`${API_BASE_URL}/${id}`);
  }, [id, setUrl]);

  const { isLoading, isError, data } = state;

  return (
    <ui.Main>
      {isError && <p>Oh oh! Something went wrong. Please try again!</p>}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data && (
          <>
            <h3>{data.volumeInfo.title}</h3>

            {data.volumeInfo.authors &&
              data.volumeInfo.authors.map((author) => (
                <h4 key={author}>{author}</h4>
              ))}
            <p>{data.volumeInfo.publishedDate}</p>
            <p>{data.volumeInfo.publisher}</p>

            <p>{data.volumeInfo.pageCount} pages</p>

            {data.volumeInfo.categories && (
              <ul>
                {data.volumeInfo.categories.map((category) => (
                  <li key={category}>{category}</li>
                ))}
              </ul>
            )}

            {data.volumeInfo.imageLinks &&
              data.volumeInfo.imageLinks.smallThumbnail && (
                <img
                  alt={`Thumbnail of ${data.volumeInfo.title}`}
                  src={data.volumeInfo.imageLinks.smallThumbnail}
                ></img>
              )}
            <p>
              <i
                dangerouslySetInnerHTML={{
                  __html: data.volumeInfo.description,
                }}
              />
            </p>
          </>
        )
      )}
    </ui.Main>
  );
};

export default ItemPage;
