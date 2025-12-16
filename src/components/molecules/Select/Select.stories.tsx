import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { Box } from '../../atoms/Box';

const meta: Meta<typeof Select> = {
  title: 'Molecules/Select',
  component: Select,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

// ----------------------------------------------------------------------------
// DEFAULT
// ----------------------------------------------------------------------------

export const Default: Story = {
  args: {
    options,
    placeholder: 'Select an option...',
  },
};

// ----------------------------------------------------------------------------
// WITH LABEL
// ----------------------------------------------------------------------------

export const WithLabel: Story = {
  args: {
    label: 'Choose an option',
    options,
  },
};

// ----------------------------------------------------------------------------
// WITH HELPER TEXT
// ----------------------------------------------------------------------------

export const WithHelperText: Story = {
  args: {
    label: 'Select plan',
    helperText: 'Choose the plan that best fits your needs',
    options,
  },
};

// ----------------------------------------------------------------------------
// WITH ERROR
// ----------------------------------------------------------------------------

export const WithError: Story = {
  args: {
    label: 'Select plan',
    error: 'Please select an option',
    options,
  },
};

// ----------------------------------------------------------------------------
// CONTROLLED
// ----------------------------------------------------------------------------

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Select
        label="Controlled Select"
        options={options}
        value={value}
        onChange={setValue}
      />
    );
  },
};

// ----------------------------------------------------------------------------
// SIZES
// ----------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg" style={{ maxWidth: '300px' }}>
      <Select size="sm" label="Small" options={options} />
      <Select size="md" label="Medium" options={options} />
      <Select size="lg" label="Large" options={options} />
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// WITH DISABLED OPTIONS
// ----------------------------------------------------------------------------

export const WithDisabledOptions: Story = {
  args: {
    label: 'Select option',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2', disabled: true },
      { value: 'option3', label: 'Option 3' },
    ],
  },
};

// ----------------------------------------------------------------------------
// DISABLED
// ----------------------------------------------------------------------------

export const Disabled: Story = {
  args: {
    label: 'Disabled Select',
    options,
    disabled: true,
    defaultValue: 'option1',
  },
};

