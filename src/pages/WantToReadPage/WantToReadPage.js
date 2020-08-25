import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWantToRead } from '../../redux/store';

import * as ui from '../../ui';

const WantToReadPage = () => {
  const results = useSelector((state) => state.wantToRead.items);
  const dispatch = useDispatch();

  return (
    <ui.Main>
      <h1>Want to read</h1>
      {results.length === 0 ? (
        <>
          <p>You have no books on your "Want to read" - list yet.</p>
          <p>
            Head over to the <Link to='/'>Search Page</Link> and add some!
          </p>
        </>
      ) : (
        <>
          <ul>
            {results.map(({ id, authors, smallThumbnail, title }) => (
              <li key={`item_${id}`}>
                <Link to={`/book/${id}`}>
                  <h3>{title}</h3>
                </Link>

                <h4>{authors && `${authors}`}</h4>
                {smallThumbnail && (
                  <img alt={`Thumbnail of ${title}`} src={smallThumbnail}></img>
                )}

                <button onClick={() => dispatch(removeFromWantToRead({ id }))}>
                  Remove from "Want to Read" - list
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </ui.Main>
  );
};

export default WantToReadPage;
