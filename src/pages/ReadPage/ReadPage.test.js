import React from 'react';
import { render } from '../../test/utils';
import ReadPage from './ReadPage';

describe('Read Page', () => {
  test('should render', () => {
    const { getByText } = render(<ReadPage />);
    expect(getByText('Read')).toBeInTheDocument();
  });
});
