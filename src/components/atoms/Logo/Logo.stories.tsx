import type { Meta, StoryObj } from '@storybook/react';
import Logo from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Atoms/Logo',
  component: Logo,
  parameters: { layout: 'centered' },
  args: {
    size: 'medium',
  },
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Small: Story = {
  args: { size: 'small' },
};

export const Medium: Story = {
  args: { size: 'medium' },
};

export const Large: Story = {
  args: { size: 'large' },
};

export const CustomColor: Story = {
  args: {
    size: 'medium',
    color: '#783C91',
  },
};
