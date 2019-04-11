import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import Category from './Category';

storiesOf('Category', module)
  .addDecorator(StoryRouter())
  .add('default', () => <Category name="Gatsby" />);
