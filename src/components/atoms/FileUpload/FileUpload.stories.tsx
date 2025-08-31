import type { Meta, StoryObj } from '@storybook/react';
import FileUpload from './FileUpload';

const meta: Meta<typeof FileUpload> = {
  title: 'Atoms/FileUpload',
  component: FileUpload,
  parameters: { layout: 'centered' },
  argTypes: {
    onFileSelect: { action: 'file selected' },
  },
};

export default meta;

type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {};

export const PDFUpload: Story = {
  args: {
    accept: '.pdf',
    maxSize: 5,
    children: 'Upload PDF (Max 5MB)',
  },
};

export const ImageUpload: Story = {
  args: {
    accept: 'image/*',
    maxSize: 10,
  },
};
