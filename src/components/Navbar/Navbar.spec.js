import React from 'react';

import { render, cleanup } from 'react-testing-library';

import Navbar from './Navbar';

afterEach(cleanup);
describe('Navbar', () => {
  it('should render correctly', () => {
    const { getAllByText } = render(<Navbar />);
    getAllByText('nav 1');
    getAllByText('nav 2');
    getAllByText('nav 3');
  });
});
