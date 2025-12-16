import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';
import { Box } from '../Box';
import { Typography } from '../Typography';

const meta: Meta<typeof Radio> = {
  title: 'Atoms/Radio',
  component: Radio,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

// ----------------------------------------------------------------------------
// DEFAULT
// ----------------------------------------------------------------------------

export const Default: Story = {
  args: {
    label: 'Radio option',
    name: 'radio-demo',
    size: 'md',
  },
};

// ----------------------------------------------------------------------------
// WITH LABEL
// ----------------------------------------------------------------------------

export const WithLabel: Story = {
  args: {
    label: 'Select this option',
    name: 'radio-demo',
  },
};

// ----------------------------------------------------------------------------
// WITH HELPER TEXT
// ----------------------------------------------------------------------------

export const WithHelperText: Story = {
  args: {
    label: 'Premium plan',
    helperText: 'Includes all features and priority support',
    name: 'radio-demo',
  },
};

// ----------------------------------------------------------------------------
// SIZES
// ----------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg">
      <Radio size="sm" label="Small radio" name="radio-sizes" />
      <Radio size="md" label="Medium radio" name="radio-sizes" />
      <Radio size="lg" label="Large radio" name="radio-sizes" />
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// LABEL POSITIONS
// ----------------------------------------------------------------------------

export const LabelPositions: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg">
      <Radio label="Label on the right (default)" labelPosition="right" name="radio-positions" />
      <Radio label="Label on the left" labelPosition="left" name="radio-positions" />
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// STATES
// ----------------------------------------------------------------------------

export const States: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg">
      <Radio label="Unchecked" name="radio-states" />
      <Radio label="Checked" name="radio-states" defaultChecked />
      <Radio label="Disabled" name="radio-states" disabled />
      <Radio label="Disabled checked" name="radio-states" disabled defaultChecked />
    </Box>
  ),
};

