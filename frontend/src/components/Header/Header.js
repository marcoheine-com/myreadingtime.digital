import React from 'react';
import { Link } from 'react-router-dom';
import * as ui from './ui';
import headerImg from '../../assets/christin-hume-k2Kcwkandwg-unsplash.jpg';

const Header = () => {
  return (
    <ui.Header headerImg={headerImg}>
      <ui.Logo>
        <Link to='/'>myreadingtime.digital</Link>
      </ui.Logo>
      <ui.Credits>
        <span>
          Photo by{' '}
          <a href='https://unsplash.com/@christinhumephoto?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>
            Christin Hume
          </a>{' '}
          on{' '}
          <a href='https://unsplash.com/@christinhumephoto?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>
            Unsplash
          </a>
        </span>
      </ui.Credits>
    </ui.Header>
  );
};

export default Header;
