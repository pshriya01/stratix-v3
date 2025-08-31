import type { Meta, StoryObj } from '@storybook/react';
import Stepper from './Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Molecules/Stepper',
  component: Stepper,
  parameters: { layout: 'centered' },
  args: {
    currentStep: 1,
    totalSteps: 5,
  },
};

export default meta;

type Story = StoryObj<typeof Stepper>;

export const Step1: Story = {
  args: {
    currentStep: 1,
    totalSteps: 5,
  },
};

export const Step3: Story = {
  args: {
    currentStep: 3,
    totalSteps: 5,
  },
};

export const Step5: Story = {
  args: {
    currentStep: 5,
    totalSteps: 5,
  },
};

export const CustomLabel: Story = {
  args: {
    currentStep: 2,
    totalSteps: 4,
    label: 'Profile Setup 2/4',
  },
};
