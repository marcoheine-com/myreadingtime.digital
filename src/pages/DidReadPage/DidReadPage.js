import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromDidRead } from '../../redux/store';
import BookListItem from '../../components/BookListItem';
import Button from '../../components/Button';
import * as ui from './ui';

const DidReadPage = () => {
  const results = useSelector((state) => state.didRead);
  const dispatch = useDispatch();

  return (
    <ui.Main>
      <ui.Headline>Did Read</ui.Headline>
      {results.length === 0 ? (
        <ui.NoData>
          <p>You have no books on your "Did read" - list yet.</p>
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
                <Button onClick={() => dispatch(removeFromDidRead(result.id))}>
                  Remove from "Did Read" - list
                </Button>
              </ui.ItemWrapper>
            ))}
          </ul>
        </>
      )}
    </ui.Main>
  );
};

export default DidReadPage;
