import type { Meta, StoryObj } from '@storybook/react';
import SelectionCard from './SelectionCard';

const meta: Meta<typeof SelectionCard> = {
  title: 'Molecules/SelectionCard',
  component: SelectionCard,
  parameters: { layout: 'centered' },
  args: {
    title: 'Influencer',
    description: 'A content creator with a dedicated following who influences their audience\'s opinions, behaviors, and purchasing decisions through social media and digital platforms.',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/4ce28ef706efea80d3f130b3963689349b87383c?width=500',
    imageAlt: 'Influencer illustration',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof SelectionCard>;

export const Default: Story = {};

export const Selected: Story = {
  args: {
    selected: true,
  },
};

export const Brand: Story = {
  args: {
    title: 'Brand',
    description: 'A business or organization that creates a distinct identity through products, services, and marketing to build recognition, trust, and loyalty among its target audience.',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/fbc7c1b082f25c9e767e17e9344d373eb0e12438?width=504',
    imageAlt: 'Brand illustration',
  },
};

export const BrandSelected: Story = {
  args: {
    title: 'Brand',
    description: 'A business or organization that creates a distinct identity through products, services, and marketing to build recognition, trust, and loyalty among its target audience.',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/fbc7c1b082f25c9e767e17e9344d373eb0e12438?width=504',
    imageAlt: 'Brand illustration',
    selected: true,
  },
};
