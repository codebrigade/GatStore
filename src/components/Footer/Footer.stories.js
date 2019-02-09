import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import Footer from './Footer';

storiesOf('Footer', module)
  .addDecorator(StoryRouter())
  .add('footer', () => <Footer name="Ant Design ©2018 Created by Ant UEDE" />);
