import React from 'react';
import { addToWantToRead, addToDidRead } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import BookListItem from '../BookListItem';
import Button from '../Button';
import * as ui from './ui';

const Results = ({ data, searchQuery }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <ui.Results>
      <h2>Searchresults {searchQuery && `for: ${searchQuery}`}</h2>
      <ul>
        {data.items.map(({ id, volumeInfo }) => {
          const { authors, title, imageLinks = '' } = volumeInfo;
          const { smallThumbnail } = imageLinks;
          const result = { ...volumeInfo, ...imageLinks, id };

          return (
            <ui.ItemWrapper key={`item_${id}`}>
              <BookListItem resultData={result} />

              <ui.Slot>
                <Button
                  onClick={
                    isAuthenticated
                      ? () =>
                          dispatch(
                            addToWantToRead({
                              id,
                              authors,
                              smallThumbnail,
                              title,
                            })
                          )
                      : () => loginWithRedirect()
                  }
                >
                  Add to "Want to read" - list
                </Button>
              </ui.Slot>

              <Button
                onClick={
                  isAuthenticated
                    ? () =>
                        dispatch(
                          addToDidRead({ id, authors, smallThumbnail, title })
                        )
                    : () => loginWithRedirect()
                }
              >
                Add to "Read" - list
              </Button>
            </ui.ItemWrapper>
          );
        })}
      </ul>
    </ui.Results>
  );
};

export default Results;
