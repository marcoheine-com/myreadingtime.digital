import React from 'react';
import * as ui from './ui';

const Button = ({ children, onClick, disabled, type = '' }) => {
  return (
    <ui.Button onClick={onClick} disabled={disabled} type={type}>
      {children}
    </ui.Button>
  );
};

export default Button;
