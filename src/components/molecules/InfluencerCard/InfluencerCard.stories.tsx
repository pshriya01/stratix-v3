import type { Meta, StoryObj } from '@storybook/react';
import InfluencerCard from './InfluencerCard';

const meta: Meta<typeof InfluencerCard> = {
  title: 'Molecules/InfluencerCard',
  component: InfluencerCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: '1',
    name: 'Gordon Ramsay',
    profileImage: 'https://api.builder.io/api/v1/image/assets/TEMP/8aa4e6040ffc932d9972b75f406b8504b2f7b8ba?width=56',
    coverImage: 'https://api.builder.io/api/v1/image/assets/TEMP/ec2fd95e98ab3314f00e2a829e7a74ac3b72f842?width=720',
    tags: 'Cooking, Unfiltered, Roastmaster, Gourmet, Placeholder',
    socialMedia: [
      { platform: 'x', followers: '1.2K' },
      { platform: 'youtube', followers: '1.2K' },
      { platform: 'facebook', followers: '1.2K' },
      { platform: 'instagram', followers: '1.2K' },
      { platform: 'tiktok', followers: '1.2K' }
    ],
    isTopCreator: true,
    rating: 4.9
  },
};

export const WithoutBadges: Story = {
  args: {
    id: '2',
    name: 'Deku',
    profileImage: 'https://api.builder.io/api/v1/image/assets/TEMP/e6eec2b2b017e830b1bab6adf7a5e40461d082ef?width=56',
    coverImage: 'https://api.builder.io/api/v1/image/assets/TEMP/ba00a44b00eaa82b2d9a6f445488f1177cdb2f50?width=720',
    tags: 'Cooking, Unfiltered, Roastmaster, Gourmet, Placeholder',
    socialMedia: [
      { platform: 'instagram', followers: '1.2K' }
    ],
    isTopCreator: false
  },
};

export const LimitedSocialMedia: Story = {
  args: {
    id: '3',
    name: 'Baki Hanma',
    profileImage: 'https://api.builder.io/api/v1/image/assets/TEMP/77c56a7d3d5b2c164b52748d388090f695bc3cf7?width=56',
    coverImage: 'https://api.builder.io/api/v1/image/assets/TEMP/c4a6c10cbb8b27cdee785862c0bb64137592bcf0?width=720',
    tags: 'Cooking, Unfiltered, Roastmaster, Gourmet, Placeholder',
    socialMedia: [
      { platform: 'x', followers: '1.2K' },
      { platform: 'facebook', followers: '1.2K' },
      { platform: 'instagram', followers: '1.2K' },
      { platform: 'tiktok', followers: '1.2K' }
    ],
    isTopCreator: false,
    rating: 4.1
  },
};

export const Grid: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(376px, 1fr))', 
      gap: '16px',
      maxWidth: '1200px'
    }}>
      <InfluencerCard
        id="1"
        name="Gordon Ramsay"
        profileImage="https://api.builder.io/api/v1/image/assets/TEMP/8aa4e6040ffc932d9972b75f406b8504b2f7b8ba?width=56"
        coverImage="https://api.builder.io/api/v1/image/assets/TEMP/ec2fd95e98ab3314f00e2a829e7a74ac3b72f842?width=720"
        tags="Cooking, Unfiltered, Roastmaster, Gourmet, Placeholder"
        socialMedia={[
          { platform: 'x', followers: '1.2K' },
          { platform: 'youtube', followers: '1.2K' },
          { platform: 'facebook', followers: '1.2K' },
          { platform: 'instagram', followers: '1.2K' },
          { platform: 'tiktok', followers: '1.2K' }
        ]}
        isTopCreator={true}
        rating={4.9}
      />
      <InfluencerCard
        id="2"
        name="Deku"
        profileImage="https://api.builder.io/api/v1/image/assets/TEMP/e6eec2b2b017e830b1bab6adf7a5e40461d082ef?width=56"
        coverImage="https://api.builder.io/api/v1/image/assets/TEMP/ba00a44b00eaa82b2d9a6f445488f1177cdb2f50?width=720"
        tags="Cooking, Unfiltered, Roastmaster, Gourmet, Placeholder"
        socialMedia={[
          { platform: 'instagram', followers: '1.2K' }
        ]}
        isTopCreator={true}
        rating={4.9}
      />
      <InfluencerCard
        id="3"
        name="Baki Hanma"
        profileImage="https://api.builder.io/api/v1/image/assets/TEMP/77c56a7d3d5b2c164b52748d388090f695bc3cf7?width=56"
        coverImage="https://api.builder.io/api/v1/image/assets/TEMP/c4a6c10cbb8b27cdee785862c0bb64137592bcf0?width=720"
        tags="Cooking, Unfiltered, Roastmaster, Gourmet, Placeholder"
        socialMedia={[
          { platform: 'x', followers: '1.2K' },
          { platform: 'facebook', followers: '1.2K' },
          { platform: 'instagram', followers: '1.2K' },
          { platform: 'tiktok', followers: '1.2K' }
        ]}
        rating={4.1}
      />
    </div>
  ),
};
