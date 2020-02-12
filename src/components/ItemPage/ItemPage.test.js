import React from 'react';
import renderWithRouter from '../../utils/testUtils';
import ItemPage from './ItemPage';
import mockData from '../../constants/mockData';

describe('ItemPage', () => {
	test('renders', () => {
		const { getByText } = renderWithRouter(<ItemPage data={mockData}/>);
		expect(getByText('ItemPage with id:')).toBeInTheDocument();
	});
});
