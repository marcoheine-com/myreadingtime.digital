import React from 'react';
import { render } from '../../test/utils';
import ItemPage from './ItemPage';
import mockData from '../../constants/mockData';

describe('ItemPage', () => {
  test('renders on inital load', () => {
    const { getByText } = render(<ItemPage data={mockData} />);

    expect(getByText('ItemPage')).toBeInTheDocument();
  });
});
