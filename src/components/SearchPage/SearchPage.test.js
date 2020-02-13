import React from 'react';
import { render } from '@testing-library/react';
import SearchPage from './SearchPage';

test('renders app title', () => {
  const { getByText } = render(<SearchPage />);
  expect(getByText('myreadingtime.digital')).toBeInTheDocument();
});

test.skip('renders input field with default text', () => {
  const { getByPlaceholderText } = render(<SearchPage />);
  expect(getByPlaceholderText('Harry Potter')).toBeInTheDocument();
});
