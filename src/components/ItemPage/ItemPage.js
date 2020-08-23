import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { API_BASE_URL } from '../../constants/api';

import * as ui from '../../ui';

const ItemPage = () => {
  const { id } = useParams();

  const fetchData = async () => {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    const data = await response.json();
    return data;
  };

  const { isLoading, isError, data } = useQuery('book', fetchData);

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

            <p>
              rating:{' '}
              {`${data.volumeInfo.averageRating}/5 (${data.volumeInfo.ratingsCount})`}
            </p>

            {data.saleInfo.listPrice && (
              <p>price: {`${data.saleInfo.listPrice.amount}€`}</p>
            )}

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
