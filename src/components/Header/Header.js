import React from 'react';

import { Button } from 'antd';

import styles from './Header.module.scss';

const Header = ({ name }) => (
  <div className={styles.header}>
    <Button type="primary">{name}</Button>
  </div>
);

export default Header;
