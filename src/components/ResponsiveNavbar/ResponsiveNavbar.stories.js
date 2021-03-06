import React from 'react';

import { storiesOf } from '@storybook/react';

import StoryRouter from 'storybook-react-router';

import ResponsiveNavbar from './ResponsiveNavbar';

storiesOf('ResponsiveNavbar', module)
  .addDecorator(StoryRouter())
  .add('default', () => <ResponsiveNavbar />);
