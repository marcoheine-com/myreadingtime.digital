import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from './test/utils';

import App from './App';
import WantToReadPage from './pages/WantToReadPage';
import ItemPage from './pages/ItemPage';
import ReadPage from './pages/ReadPage';

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

  test('renders read page', () => {
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <ReadPage />
      </Router>
    );

    history.push('/read');

    expect(history.location.pathname).toBe('/read');
    expect(container.innerHTML).toMatch('Read');
  });
});
