import React, { Component } from 'react';

import { Card, Icon, Popconfirm } from 'antd';

import styles from './CartItem.module.scss';

const { Meta } = Card;

class CartItem extends Component {
  state = {
    heartClick: false,
  };

  toogleHeart = () =>
    this.setState(prevState => ({
      heartClick: !prevState.heartClick,
    }));

  render() {
    const heartClick = this.state;
    return (
      <Card
        className={styles.cartItemCart}
        actions={[
          <Icon
            type="heart"
            theme={heartClick ? 'filled' : 'outlined'}
            onClick={this.toogleHeart}
          />,
          <Popconfirm
            title="Are you sure？"
            // eslint-disable-next-line prettier/prettier
            // eslint-disable-next-line react/jsx-closing-bracket-location
            icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}>
            <Icon type="delete" />
          </Popconfirm>,
        ]}
        hoverable
        style={{ width: 240, margin: 10 }}
        cover={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
          // eslint-disable-next-line prettier/prettier
        // eslint-disable-next-line react/jsx-closing-bracket-location
        }>
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    );
  }
}

export default CartItem;
