import React from 'react';
import { Link } from 'react-router-dom';
import * as ui from './ui';

const BookListItem = ({ resultData }) => {
  const { id, authors, smallThumbnail, title } = resultData;

  return (
    <ui.ListItem>
      <Link to={`/book/${id}`}>
        <h3>{title}</h3>
      </Link>
      <h4>{authors && `${authors}`}</h4>
      {smallThumbnail && (
        <img alt={`Thumbnail of ${title}`} src={smallThumbnail}></img>
      )}
    </ui.ListItem>
  );
};

export default BookListItem;
