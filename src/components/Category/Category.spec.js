import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Category from './Category';

afterEach(cleanup);
describe('Category', () => {
  it('should contains category', () => {
    const { getByText } = render(<Category />);
    getByText('Category');
  });
});
