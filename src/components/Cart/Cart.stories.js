import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import Cart from './Cart';

storiesOf('Cart', module)
  .addDecorator(StoryRouter())
  .add('default', () => <Cart name="Gatsby" />);
