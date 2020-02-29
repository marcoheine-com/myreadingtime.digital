import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import SearchPage from './SearchPage';

test('renders app title', () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <SearchPage />
    </Router>
  );
  expect(getByText('myreadingtime.digital')).toBeInTheDocument();
});

test('renders input field with default text', () => {
  const history = createMemoryHistory();
  const { getByPlaceholderText } = render(
    <Router history={history}>
      <SearchPage />
    </Router>
  );
  expect(getByPlaceholderText('Harry Potter')).toBeInTheDocument();
});
