import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromDidRead } from '../../redux/store';

import * as ui from '../../ui';

const DidReadPage = () => {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.didRead.items);

  return (
    <ui.Main>
      <h1>Did Read</h1>
      {results.length === 0 ? (
        <>
          <p>You have no books on your "Did read" - list yet.</p>
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

                <button onClick={() => dispatch(removeFromDidRead({ id }))}>
                  Remove from "Did Read" - list
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </ui.Main>
  );
};

export default DidReadPage;
