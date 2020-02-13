import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import ItemPage from './ItemPage';
import mockData from '../../constants/mockData';

describe('ItemPage', () => {
  test('renders on inital load', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <ItemPage data={mockData} />
      </Router>
    );

    expect(getByText('ItemPage')).toBeInTheDocument();
  });
});
