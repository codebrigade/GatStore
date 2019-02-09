import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';
import './index.scss';

const TemplateWrapper = () => (
  <div>
    <Helmet
      title="GatStore"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Header name="Header" />
    <Footer name="Footer" />
  </div>
);

export default TemplateWrapper;
