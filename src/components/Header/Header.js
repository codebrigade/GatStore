import React from 'react';

import { Button } from 'antd';

import styles from './Header.module.scss';

import Navbar from '../Navbar/Navbar';

import ResponsiveNavbar from '../ResponsiveNavbar/ResponsiveNavbar';

const Header = ({ name }) => (
  <div className={styles.header}>
    <Button type="primary">{name}</Button>
    {window.outerWidth > 500 ? <Navbar /> : <ResponsiveNavbar />}
  </div>
);

export default Header;
