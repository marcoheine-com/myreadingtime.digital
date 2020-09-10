import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useGoogleBooksApi from '../../hooks/useGoogleBooksApi';
import { addToWantToRead, addToDidRead } from '../../redux/store';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import { API_BASE_URL } from '../../constants/api';

import * as ui from './ui';

const ItemPage = () => {
  const { state, setUrl } = useGoogleBooksApi();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    setUrl(`${API_BASE_URL}/${id}`);
  }, [id, setUrl]);

  const { isLoading, isError, data } = state;

  return (
    <ui.Main>
      {isError && <p>Oh oh! Something went wrong. Please try again!</p>}

      {isLoading ? (
        <ui.Loading>Loading...</ui.Loading>
      ) : (
        data && (
          <>
            <h3>{data.volumeInfo.title}</h3>

            {data.volumeInfo.authors &&
              data.volumeInfo.authors.map((author) => (
                <h4 key={author}>by {author}</h4>
              ))}
            <p>{data.volumeInfo.publishedDate}</p>
            <p>{data.volumeInfo.publisher}</p>

            <p>{data.volumeInfo.pageCount} pages</p>

            {data.volumeInfo.averageRating && (
              <p>
                rating:{' '}
                {`${data.volumeInfo.averageRating}/5 (${data.volumeInfo.ratingsCount})`}
              </p>
            )}

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
                  loading='lazy'
                ></img>
              )}
            <p>
              <i
                dangerouslySetInnerHTML={{
                  __html: data.volumeInfo.description,
                }}
              />
            </p>
            <ui.Slot>
              <Button
                onClick={() => {
                  const { authors, title, imageLinks } = data.volumeInfo;
                  const { smallThumbnail } = imageLinks;
                  dispatch(
                    addToWantToRead({ id, authors, title, smallThumbnail })
                  );
                }}
              >
                Add to "Want to read" - list
              </Button>
            </ui.Slot>

            <Button
              onClick={() => {
                const { authors, title, imageLinks } = data.volumeInfo;
                const { smallThumbnail } = imageLinks;
                dispatch(
                  addToDidRead({
                    id,
                    authors,
                    title,
                    smallThumbnail,
                  })
                );
              }}
            >
              Add to "Read" - list
            </Button>
          </>
        )
      )}
    </ui.Main>
  );
};

export default ItemPage;
