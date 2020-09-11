import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as ui from './ui';

const Navigation = () => {
  const numOfWantToReadItems = useSelector((state) => state.wantToRead.length);

  const numOfDidReadItems = useSelector((state) => state.didRead.length);

  const hasWantToReadItems = numOfWantToReadItems > 0;
  const hasDidReadItems = numOfDidReadItems > 0;

  return (
    <ui.Navigation>
      <ui.List>
        <ui.ListItem>
          <Link to='/'>Search</Link>{' '}
        </ui.ListItem>
        <ui.ListItem>
          <Link to='/want-to-read'>
            Want to read{' '}
            {hasWantToReadItems && <ui.Count>{numOfWantToReadItems}</ui.Count>}
          </Link>
        </ui.ListItem>
        <ui.ListItem>
          <Link to='/currently-reading'>Currently Reading</Link>{' '}
        </ui.ListItem>
        <ui.ListItem>
          <Link to='/read'>
            Read {hasDidReadItems && <ui.Count>{numOfDidReadItems}</ui.Count>}
          </Link>
        </ui.ListItem>
      </ui.List>
    </ui.Navigation>
  );
};

export default Navigation;
