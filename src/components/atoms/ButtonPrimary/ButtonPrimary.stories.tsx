import type { Meta, StoryObj } from '@storybook/react';
import ButtonPrimary from './ButtonPrimary';

const meta: Meta<typeof ButtonPrimary> = {
  title: 'Atoms/ButtonPrimary',
  component: ButtonPrimary,
  parameters: { layout: 'centered' },
  args: {
    label: 'Primary Button',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonPrimary>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
