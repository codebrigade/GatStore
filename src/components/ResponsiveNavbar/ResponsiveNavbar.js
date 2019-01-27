import React from 'react';

import { Button, Drawer, Icon } from 'antd';

// import styles from './Header.module.scss';

class ResponsiveNavbar extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <Button
          type="default"
          onClick={this.showDrawer}
          style={{ marginBottom: 16 }} // coments
        >
          <Icon type={visible ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="left"
          closable
          onClose={this.onClose}
          visible={visible} // comments
        >
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </Drawer>
      </div>
    );
  }
}

export default ResponsiveNavbar;
