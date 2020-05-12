import React from 'react';
import { render } from '../../test/utils';
import Navigation from './Navigation';

describe('Navigation', () => {
  test('renders', () => {
    const { getByText } = render(<Navigation />);

    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Want to read')).toBeInTheDocument();
    expect(getByText('Did read')).toBeInTheDocument();
  });
});
