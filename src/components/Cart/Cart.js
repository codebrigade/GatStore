import React, { Component } from 'react';

import styles from './Cart.module.scss';

import CardItem from '../CartItem/CartItem';

class Cart extends Component {
  render() {
    return (
      <div className={styles.cart}>
        <h1>My Cart</h1>
        <div className={styles.mainCartItemDiv}>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>
    );
  }
}

export default Cart;
