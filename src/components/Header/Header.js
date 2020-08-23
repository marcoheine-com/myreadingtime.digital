import React from 'react';
import * as ui from './ui';
import headerImg from '../../assets/christin-hume-k2Kcwkandwg-unsplash.jpg';

const Header = () => {
  return (
    <ui.Header headerImg={headerImg}>
      <ui.Logo>
        <a href='/'>myreadingtime.digital</a>
      </ui.Logo>
    </ui.Header>
  );
};

export default Header;
