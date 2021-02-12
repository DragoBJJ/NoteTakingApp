import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const Primary = () => {
  const label = 'Colors';

  const options = {
    notes: 'hsl(0, 72%, 51%)',
    twitters: 'hsl(196, 83%, 75%)',
    articles: 'hsl(106, 47%, 64%)',
  };
  const defaultValue = options.twitters;
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);

  return <Button color={value}>Close</Button>;
};
export const Secondary = () => <Button secondary>Button</Button>;
