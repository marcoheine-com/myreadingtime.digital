import React from 'react';
import { render } from '../../test/utils';
import DidReadPage from './DidReadPage';

describe('', () => {
  test('should render', () => {
    const { getByText } = render(<DidReadPage />);
    expect(getByText('DidReadPage')).toBeInTheDocument();
  });
});
