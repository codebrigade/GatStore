import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Header from './Header';

afterEach(cleanup);
describe('Header', () => {
  it('should contains name', () => {
    const { getByText } = render(<Header name="Antony" />);
    getByText('Antony');
  });
});
