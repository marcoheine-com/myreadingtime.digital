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
    </ui.Header>
  );
};

export default Header;
