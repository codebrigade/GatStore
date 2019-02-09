import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Footer from './Footer';

afterEach(cleanup);
describe('Footer', () => {
  it('should contains name', () => {
    const { getByText } = render(<Footer name="Antony" />);
    getByText('Antony');
  });
});
