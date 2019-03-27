import React from 'react';

import { Menu, Dropdown, Icon } from 'antd';

import styles from './Category.module.scss';

const { SubMenu } = Menu;

const menu = (
  <Menu>
    <SubMenu title="Electronic Devices">
      <SubMenu title="Mobiles">
        <Menu.Item>Apple</Menu.Item>
        <Menu.Item>Samsung</Menu.Item>
        <Menu.Item>Oppo</Menu.Item>
      </SubMenu>
      <Menu.Item>Computers</Menu.Item>
      <Menu.Item>Tablets</Menu.Item>
      <Menu.Item>Laptops</Menu.Item>
    </SubMenu>
    <Menu.Item>Fasion</Menu.Item>
    <Menu.Item>Health</Menu.Item>
    <Menu.Item>Beauty</Menu.Item>
    <Menu.Item>Watches</Menu.Item>
  </Menu>
);

const Category = () => (
  <div className={styles.category}>
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" href="#">
        Category
        <Icon type="down" />
      </a>
    </Dropdown>
  </div>
);

export default Category;
