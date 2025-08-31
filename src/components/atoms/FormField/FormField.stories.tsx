import type { Meta, StoryObj } from '@storybook/react';
import FormField from './FormField';

const meta: Meta<typeof FormField> = {
  title: 'Atoms/FormField',
  component: FormField,
  parameters: { layout: 'centered' },
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof FormField>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    value: 'user@example.com',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const Error: Story = {
  args: {
    error: true,
    helperText: 'This field is required',
  },
};
