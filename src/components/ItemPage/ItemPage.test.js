import React from 'react';
import renderWithRouter from '../../utils/testUtils';
import ItemPage from './ItemPage';

describe('ItemPage', () => {
	test('renders', () => {
		const { getByText } = renderWithRouter(<ItemPage />);
		expect(getByText('ItemPage with id:')).toBeInTheDocument();
	});
});
