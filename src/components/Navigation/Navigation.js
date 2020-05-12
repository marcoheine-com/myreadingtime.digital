import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const numOfWantToReadItems = useSelector(
    (state) => state.wantToRead.items.length
  );

  const numOfDidReadItems = useSelector((state) => state.didRead.items.length);

  const hasWantToReadItems = numOfWantToReadItems > 0;
  const hasDidReadItems = numOfDidReadItems > 0;

  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/want-to-read'>Want to read</Link>{' '}
          {hasWantToReadItems && numOfWantToReadItems}
        </li>
        <li>
          <Link to='/books-I-red'>Did read</Link>{' '}
          {hasDidReadItems && numOfDidReadItems}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
