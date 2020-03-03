import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/want-to-read'>Want to read</Link>
      </li>
      <li>
        <Link to='/books-I-red'>Books I red</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
