import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from './test/utils';

import App from './App';
import WantToReadPage from './pages/WantToReadPage';
import ItemPage from './pages/ItemPage';
import DidReadPage from './pages/DidReadPage';

describe('App', () => {
  test('renders home page', () => {
    const { container } = render(<App />);

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
    expect(container.innerHTML).toMatch('Want to read');
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
    expect(container.innerHTML).toMatch('Did read');
  });
});
