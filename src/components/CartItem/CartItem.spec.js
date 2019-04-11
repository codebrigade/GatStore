import React from 'react';
import { render, cleanup } from 'react-testing-library';
import CartItem from './CartItem';

afterEach(cleanup);
describe('CartItem Test', () => {
  it('should contains Europe Street beat', () => {
    const { getByText } = render(<CartItem />);
    getByText('Europe Street beat');
  });
});
