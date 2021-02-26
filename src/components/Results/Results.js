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
        {data.items.map(({ id, volumeInfo, searchInfo }) => {
          const { authors, title, imageLinks = '' } = volumeInfo;
          const { smallThumbnail } = imageLinks;
          const result = { ...volumeInfo, ...imageLinks, id, ...searchInfo };

          return (
            <ui.ItemWrapper key={`item_${id}`}>
              <BookListItem resultData={result} />

              <ui.Actions>
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
                  Want to read
                </Button>

                <Button
                  onClick={
                    isAuthenticated ? () => {} : () => loginWithRedirect()
                  }
                >
                  Currently reading
                </Button>

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
                  Read
                </Button>
              </ui.Actions>
            </ui.ItemWrapper>
          );
        })}
      </ul>
    </ui.Results>
  );
};

export default Results;
