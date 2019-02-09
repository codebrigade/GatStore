import React from 'react';
import { Divider } from 'antd';

import styles from './Footer.module.scss';

const Footer = ({ name }) => (
  <div className={styles.mainFooter}>
    <div className={styles.circle} />
    <div className={styles.divider}>
      <Divider type="vertical" />
    </div>
    <div className={styles.footer}>{name}</div>
  </div>
);

export default Footer;
