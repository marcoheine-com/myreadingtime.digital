import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as ui from './ui';

const Navigation = () => {
  const numOfWantToReadItems = useSelector(
    (state) => state.wantToRead.items.length
  );

  const numOfDidReadItems = useSelector((state) => state.didRead.items.length);

  const hasWantToReadItems = numOfWantToReadItems > 0;
  const hasDidReadItems = numOfDidReadItems > 0;

  return (
    <ui.Navigation>
      <ui.List>
        <ui.ListItem>
          <Link to='/'>Search</Link>{' '}
        </ui.ListItem>
        <ui.ListItem>
          <Link to='/want-to-read'>Want to read</Link>{' '}
          {hasWantToReadItems && numOfWantToReadItems}
        </ui.ListItem>
        <ui.ListItem>
          <Link to='/read'>Read</Link>{' '}
        </ui.ListItem>
        <ui.ListItem>
          <Link to='/books-I-red'>Did read</Link>{' '}
          {hasDidReadItems && numOfDidReadItems}
        </ui.ListItem>
      </ui.List>
    </ui.Navigation>
  );
};

export default Navigation;
