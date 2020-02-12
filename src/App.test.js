import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import App from './App';
import ItemPage from './components/ItemPage';

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
      <App />
    </Router>
	);

	history.push('/want-to-read');
	
	expect(history.location.pathname).toBe('/want-to-read');
	expect(container.innerHTML).toMatch('Want to read');
});

test('renders ItemPage page', () => {
	const history = createMemoryHistory();
	history.push('/book/:adfdfa');

  const { container } = render(
		<Router history={history}>
      <ItemPage />
    </Router>
	);

	expect(history.location.pathname).toBe('/book/:adfdfa');
	expect(container.innerHTML).toMatch('ItemPage');
});
