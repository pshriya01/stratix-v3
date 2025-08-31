import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    onLogoClick: { action: 'logo clicked' },
    onSearchChange: { action: 'search changed' },
    onPostCampaignClick: { action: 'post campaign clicked' },
    onMessagesClick: { action: 'messages clicked' },
    onNotificationsClick: { action: 'notifications clicked' },
    onProfileClick: { action: 'profile clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    searchValue: '',
    hasNotifications: true,
    profileImage: undefined
  },
};

export const WithSearch: Story = {
  args: {
    searchValue: 'Gordon Ramsay',
    hasNotifications: true,
    profileImage: undefined
  },
};

export const WithProfileImage: Story = {
  args: {
    searchValue: '',
    hasNotifications: true,
    profileImage: 'https://api.builder.io/api/v1/image/assets/TEMP/8aa4e6040ffc932d9972b75f406b8504b2f7b8ba?width=80'
  },
};

export const NoNotifications: Story = {
  args: {
    searchValue: '',
    hasNotifications: false,
    profileImage: 'https://api.builder.io/api/v1/image/assets/TEMP/8aa4e6040ffc932d9972b75f406b8504b2f7b8ba?width=80'
  },
};
