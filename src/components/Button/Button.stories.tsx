// Button.stories.tsx
import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
} as Meta<ButtonProps>;

const Template: StoryObj<ButtonProps> = {
  render: (args) => <Button {...args} />
};

export const Primary = {
  ...Template,
  args: {
    primary: true,
    children: 'Primary Button',
  },
};

export const Secondary = {
  ...Template,
  args: {
    primary: false,
    backgroundColor: '#eeeeee',
    children: 'Secondary Button',
  },
};

export const Large = {
  ...Template,
  args: {
    size: 'large',
    children: 'Large Button',
  },
};

export const Small = {
  ...Template,
  args: {
    size: 'small',
    children: 'Small Button',
  },
};
