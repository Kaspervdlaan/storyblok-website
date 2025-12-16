import type { Meta, StoryObj } from '@storybook/react';
import { FormGroup } from './FormGroup';
import { Input } from '../../atoms/Input';
import { Checkbox } from '../../atoms/Checkbox';
import { RadioGroup } from '../RadioGroup';
import { Box } from '../../atoms/Box';

const meta: Meta<typeof FormGroup> = {
  title: 'Molecules/FormGroup',
  component: FormGroup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormGroup>;

export const Default: Story = {
  args: {
    legend: 'Personal Information',
    children: (
      <>
        <Input label="First Name" />
        <Input label="Last Name" />
        <Input label="Email" type="email" />
      </>
    ),
  },
};

export const WithHelperText: Story = {
  args: {
    legend: 'Account Settings',
    helperText: 'Configure your account preferences',
    children: (
      <>
        <Checkbox label="Email notifications" />
        <Checkbox label="SMS notifications" />
      </>
    ),
  },
};

export const WithError: Story = {
  args: {
    legend: 'Payment Information',
    error: 'Please fill in all required fields',
    children: (
      <>
        <Input label="Card Number" error="Invalid card number" />
        <Input label="Expiry Date" />
      </>
    ),
  },
};

export const WithRadioGroup: Story = {
  args: {
    legend: 'Select Plan',
    children: (
      <RadioGroup
        name="plan"
        options={[
          { value: 'basic', label: 'Basic' },
          { value: 'pro', label: 'Pro' },
          { value: 'enterprise', label: 'Enterprise' },
        ]}
      />
    ),
  },
};

