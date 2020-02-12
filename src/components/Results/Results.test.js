import React from 'react';
import { render } from '@testing-library/react';
import Results from './Results';
import mockData from '../../constants/mockData';

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
