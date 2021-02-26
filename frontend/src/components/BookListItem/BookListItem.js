import React from 'react';
import { Link } from 'react-router-dom';
import * as ui from './ui';

const BookListItem = ({ resultData }) => {
  const {
    id,
    authors,
    smallThumbnail,
    title,
    publishedDate,
    textSnippet,
  } = resultData;

  const url = smallThumbnail?.replace(/^http:\/\//i, 'https://');

  const formatDate = (date) => {
    const newDate = new Date(date);

    return newDate.toLocaleDateString('en', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const DATE = publishedDate && formatDate(publishedDate);

  return (
    <Link to={`/book/${id}`}>
      <ui.ListItem>
        {smallThumbnail && (
          <img alt={`Thumbnail of ${title}`} src={url} loading='lazy'></img>
        )}
        <ui.Content>
          <h4>{title}</h4>
          {authors && <p>by {authors}</p>}
          {publishedDate && <time dateTime={DATE}>Published: {DATE}</time>}
          {textSnippet && (
            <i dangerouslySetInnerHTML={{ __html: textSnippet }} />
          )}
        </ui.Content>
      </ui.ListItem>
    </Link>
  );
};

export default BookListItem;
