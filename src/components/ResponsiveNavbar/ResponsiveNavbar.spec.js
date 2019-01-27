import React from 'react';
import { render, cleanup } from 'react-testing-library';
import ResponsiveNavbar from './ResponsiveNavbar';

afterEach(cleanup);
describe('ResponsiveNavbar', () => {
  it('should contains name', () => {
    const { getByText } = render(<ResponsiveNavbar />);
    getByText('');
  });
});
