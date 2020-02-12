import React from 'react';
import renderWithRouter from './utils/testUtils';
import App from './App';

test('renders home page', () => {
	const { container } = renderWithRouter(<App />, {
		route: '/'
	});

	expect(container.innerHTML).toMatch('Search for a book:');
});

test('renders home page', () => {
	const { getByTestId } = renderWithRouter(<App />, {
		route: '/:id'
	});

	expect(getByTestId('itemPage')).toBeInTheDocument();
});
