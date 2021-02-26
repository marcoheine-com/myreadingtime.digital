import React from 'react';
import * as ui from './ui';

const Footer = () => {
  return (
    <ui.Footer>
      <ui.List>
        <ui.ListItem>&copy; Marco Kühbauch</ui.ListItem>
        <ui.ListItem>
          <a
            href='https://github.com/mkuehb/myreadingtime.digital'
            target='_blank'
            rel='noopener noreferrer'
          >
            myreadingtime.digital on GitHub
          </a>
        </ui.ListItem>
        <ui.ListItem>
          <a
            href='https://marcokuehbauch.com/about'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn more about Marco
          </a>
        </ui.ListItem>
      </ui.List>
    </ui.Footer>
  );
};

export default Footer;
