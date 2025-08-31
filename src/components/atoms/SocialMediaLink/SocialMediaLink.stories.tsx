import type { Meta, StoryObj } from '@storybook/react';
import SocialMediaLink from './SocialMediaLink';

const meta: Meta<typeof SocialMediaLink> = {
  title: 'Atoms/SocialMediaLink',
  component: SocialMediaLink,
  parameters: { layout: 'centered' },
  args: {
    platform: 'Instagram',
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/4cc0ba0fa2b9f800faa505ef121cedcb508f17e2?width=48',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof SocialMediaLink>;

export const Instagram: Story = {};

export const Connected: Story = {
  args: {
    connected: true,
  },
};

export const Facebook: Story = {
  args: {
    platform: 'Facebook',
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/3375389a700d5c66c5cd2ede686b23e114909f33?width=48',
  },
};

export const YouTube: Story = {
  args: {
    platform: 'YouTube',
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/5a186903571fcf9612613ccc5438fe6173db104d?width=48',
  },
};
