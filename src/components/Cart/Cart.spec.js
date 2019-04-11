import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Cart from './Cart';

afterEach(cleanup);
describe('Cart', () => {
  it('should contains cart', () => {
    const { getByText } = render(<Cart />);
    getByText('My Cart');
  });
});
