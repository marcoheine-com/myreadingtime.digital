import React from 'react';
import { Link } from 'react-router-dom';
import * as ui from './ui';

const BookListItem = ({ resultData }) => {
  const { id, authors, smallThumbnail, title } = resultData;

  return (
    <ui.ListItem>
      <Link to={`/book/${id}`}>
        <h4>{title}</h4>
        <p>by {authors && `${authors}`}</p>
        {smallThumbnail && (
          <img
            alt={`Thumbnail of ${title}`}
            src={smallThumbnail}
            loading='lazy'
          ></img>
        )}
      </Link>
    </ui.ListItem>
  );
};

export default BookListItem;
