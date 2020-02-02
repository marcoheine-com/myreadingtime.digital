import React from 'react';
import { render } from '@testing-library/react';
import Results from './Results';

const mockData = {
	items: [
		{
			volumeInfo: {
				title: 'Cool Book you should read',
				authors: ['Peter Peters']
			}
		}
	]
};

test('renders title of a search result', () => {
	const { getByText } = render(<Results data={mockData} />);
	const title = getByText(/Cool Book you should rea/i);
	expect(title).toBeInTheDocument();
});

test('renders author of a search result', () => {
	const { getByText } = render(<Results data={mockData} />);
	const author = getByText(/Peter Peters/i);
	expect(author).toBeInTheDocument();
});
