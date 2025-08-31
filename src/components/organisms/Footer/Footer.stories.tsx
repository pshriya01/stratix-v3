import type { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    onLinkClick: { action: 'link clicked' },
    onSocialClick: { action: 'social clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
