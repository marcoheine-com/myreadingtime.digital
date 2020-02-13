import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

import App from './App';
import WantToReadPage from './components/WantToReadPage';
import ItemPage from './components/ItemPage';
import DidReadPage from './components/DidReadPage';

test('renders home page', () => {
  const history = createMemoryHistory();
  const { container } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(container.innerHTML).toMatch('Search for a book:');
});

test('renders want-to-read page', () => {
  const history = createMemoryHistory();

  const { container } = render(
    <Router history={history}>
      <WantToReadPage />
    </Router>
  );

  history.push('/want-to-read');

  expect(history.location.pathname).toBe('/want-to-read');
  expect(container.innerHTML).toMatch('WantToReadPage');
});

test('renders ItemPage page', () => {
  const history = createMemoryHistory();

  const { container } = render(
    <Router history={history}>
      <ItemPage />
    </Router>
  );

  history.push('/book/:adfdfa');

  expect(history.location.pathname).toBe('/book/:adfdfa');
  expect(container.innerHTML).toMatch('ItemPage');
});

test('renders books-I-red page', () => {
  const history = createMemoryHistory();
  const { container } = render(
    <Router history={history}>
      <DidReadPage />
    </Router>
  );

  history.push('/books-I-red');

  expect(history.location.pathname).toBe('/books-I-red');
  expect(container.innerHTML).toMatch('DidReadPage');
});
