import React from 'react';
import { addToWantToRead, addToDidRead } from '../../redux/store';
import { useDispatch } from 'react-redux';
import BookListItem from '../BookListItem';
import Button from '../Button';
import * as ui from './ui';

const Results = ({ data, searchQuery }) => {
  const dispatch = useDispatch();

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
              <Button
                onClick={() =>
                  dispatch(
                    addToWantToRead({ id, authors, smallThumbnail, title })
                  )
                }
              >
                Add to "Want to read" - list
              </Button>

              <Button
                onClick={() =>
                  dispatch(addToDidRead({ id, authors, smallThumbnail, title }))
                }
              >
                Add to "Did read" - list
              </Button>
            </ui.ItemWrapper>
          );
        })}
      </ul>
    </ui.Results>
  );
};

export default Results;
