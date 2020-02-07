import React from 'react';
import { render } from '@testing-library/react';
import Results from './Results';

const mockData = {
	items: [
		{
			id: '1',
			volumeInfo: {
				title: 'Harry Potter and a lot of magic',
				authors: ['Marry Klotter']
			}
		},
		{
			id: '2',
			volumeInfo: {
				title: 'Pikachu and a lot of Thunder',
				authors: ['Peter Peters'],
				imageLinks: {
					smallThumbNail: 'pathTo/smallThumbNail'
				}
			}
		}
	]
};

test('renders title of a search result', () => {
	const { getByText } = render(<Results data={mockData} />);
	const title = getByText(/Harry Potter and a lot of magic/i);
	expect(title).toBeInTheDocument();
});

test('renders author of a search result', () => {
	const { getByText } = render(<Results data={mockData} />);
	const author = getByText(/Marry Klotter/i);
	expect(author).toBeInTheDocument();
});

test('renders thumbnail with alt tag if one is available', () => {
	const { getByAltText } = render(<Results data={mockData} />);
	const thumbnailAltTag = getByAltText(
		/Thumbnail of Pikachu and a lot of Thunder/i
	);
	expect(thumbnailAltTag).toBeInTheDocument();
});
