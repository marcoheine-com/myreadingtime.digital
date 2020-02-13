import React from 'react';
import { render } from '@testing-library/react';
import WantToReadPage from './WantToReadPage';

describe('', () => {
  test('should render', () => {
    const { getByText } = render(<WantToReadPage />);
    expect(getByText('WantToReadPage')).toBeInTheDocument();
  });
});
