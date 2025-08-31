import type { Meta, StoryObj } from '@storybook/react';
import SocialMediaChip from './SocialMediaChip';

const meta: Meta<typeof SocialMediaChip> = {
  title: 'Atoms/SocialMediaChip',
  component: SocialMediaChip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    platform: {
      control: { type: 'select' },
      options: ['x', 'youtube', 'facebook', 'instagram', 'tiktok'],
    },
    count: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Instagram: Story = {
  args: {
    platform: 'instagram',
    count: '1.2K',
  },
};

export const YouTube: Story = {
  args: {
    platform: 'youtube',
    count: '1.2K',
  },
};

export const Facebook: Story = {
  args: {
    platform: 'facebook',
    count: '1.2K',
  },
};

export const X: Story = {
  args: {
    platform: 'x',
    count: '1.2K',
  },
};

export const TikTok: Story = {
  args: {
    platform: 'tiktok',
    count: '1.2K',
  },
};

export const AllPlatforms: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <SocialMediaChip platform="x" count="1.2K" />
      <SocialMediaChip platform="youtube" count="1.2K" />
      <SocialMediaChip platform="facebook" count="1.2K" />
      <SocialMediaChip platform="instagram" count="1.2K" />
      <SocialMediaChip platform="tiktok" count="1.2K" />
    </div>
  ),
};
