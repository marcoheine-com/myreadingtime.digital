import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWantToRead } from '../../redux/store';
import BookListItem from '../../components/BookListItem';
import Button from '../../components/Button';

import * as ui from './ui';

const WantToReadPage = () => {
  const results = useSelector((state) => state.wantToRead);
  const dispatch = useDispatch();

  return (
    <ui.Main>
      <ui.Headline>Want to read</ui.Headline>
      {results.length === 0 ? (
        <ui.NoData>
          <p>You have no books on your "Want to read" - list yet.</p>
          <p>
            Head over to the <Link to='/'>Search Page</Link> and add some!
          </p>
        </ui.NoData>
      ) : (
        <>
          <ul>
            {results.map((result) => (
              <ui.ItemWrapper key={`item_${result.id}`}>
                <BookListItem resultData={result} />
                <Button
                  onClick={() => dispatch(removeFromWantToRead(result.id))}
                >
                  Remove from "Want to Read" - list
                </Button>
              </ui.ItemWrapper>
            ))}
          </ul>
        </>
      )}
    </ui.Main>
  );
};

export default WantToReadPage;
