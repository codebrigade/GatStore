import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './index.scss';
import 'antd/dist/antd.css';

const TemplateWrapper = () => (
  <div>
    <Helmet
      title="GatStore"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Header name="Gatsby" />
  </div>
);

export default TemplateWrapper;
