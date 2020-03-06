import React from 'react';
import { render } from '../../test/utils';
import WantToReadPage from './WantToReadPage';

describe('', () => {
  test('should render', () => {
    const { getByText } = render(<WantToReadPage />);
    expect(getByText('WantToReadPage')).toBeInTheDocument();
  });
});
