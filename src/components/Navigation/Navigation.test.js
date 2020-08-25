import React from 'react';
import { render } from '../../test/utils';
import Navigation from './Navigation';

describe('Navigation', () => {
  test('renders', () => {
    const { getByText } = render(<Navigation />);

    expect(getByText('Want to read')).toBeInTheDocument();
    expect(getByText('Read')).toBeInTheDocument();
    expect(getByText('Did read')).toBeInTheDocument();
  });
});
