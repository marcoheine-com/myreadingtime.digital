import React from 'react';
import { Link } from 'react-router-dom';
import { addToWantToRead, addToDidRead } from '../../redux/store';
import { useDispatch } from 'react-redux';

const Results = ({ data, searchQuery }) => {
  const dispatch = useDispatch();

  return (
    <>
      <h2>Searchresults {searchQuery && `for: ${searchQuery}`}</h2>
      <ul>
        {data.items.map(({ id, volumeInfo }) => {
          const { authors, title, imageLinks = '' } = volumeInfo;
          const { smallThumbnail } = imageLinks;

          return (
            <li key={`item_${id}`}>
              <Link to={`/book/${id}`}>
                <h3>{title}</h3>
              </Link>

              <h4>{authors && `${authors}`}</h4>
              {smallThumbnail && (
                <img alt={`Thumbnail of ${title}`} src={smallThumbnail}></img>
              )}

              <button
                onClick={() =>
                  dispatch(
                    addToWantToRead({ id, authors, smallThumbnail, title })
                  )
                }
              >
                Add to "Want to read" - list
              </button>

              <button
                onClick={() =>
                  dispatch(addToDidRead({ id, authors, smallThumbnail, title }))
                }
              >
                Add to "Did read" - list
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Results;
