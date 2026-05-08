import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { Card } from '../../molecules/Card';

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switch',
  component: Switch,
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
type Story = StoryObj<typeof Switch>;

// ----------------------------------------------------------------------------
// DEFAULT
// ----------------------------------------------------------------------------

export const Default: Story = {
  args: {
    label: 'Toggle switch',
    size: 'md',
  },
};

// ----------------------------------------------------------------------------
// WITH LABEL
// ----------------------------------------------------------------------------

export const WithLabel: Story = {
  args: {
    label: 'Enable notifications',
  },
};

// ----------------------------------------------------------------------------
// WITH HELPER TEXT
// ----------------------------------------------------------------------------

export const WithHelperText: Story = {
  args: {
    label: 'Dark mode',
    helperText: 'Switch between light and dark themes',
  },
};

// ----------------------------------------------------------------------------
// WITH ERROR
// ----------------------------------------------------------------------------

export const WithError: Story = {
  args: {
    label: 'Accept terms',
    error: 'You must accept the terms to continue',
  },
};

// ----------------------------------------------------------------------------
// SIZES
// ----------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg">
      <Switch size="sm" label="Small switch" />
      <Switch size="md" label="Medium switch" />
      <Switch size="lg" label="Large switch" />
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// LABEL POSITIONS
// ----------------------------------------------------------------------------

export const LabelPositions: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg">
      <Switch label="Label on the right (default)" labelPosition="right" />
      <Switch label="Label on the left" labelPosition="left" />
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// STATES
// ----------------------------------------------------------------------------

export const States: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg">
      <Switch label="Unchecked" />
      <Switch label="Checked" defaultChecked />
      <Switch label="Disabled" disabled />
      <Switch label="Disabled checked" disabled defaultChecked />
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// FORM EXAMPLE
// ----------------------------------------------------------------------------

export const FormExample: Story = {
  render: () => (
    <Card variant="elevated" padding="lg" style={{ maxWidth: '400px' }}>
      <Card.Header>
        <Typography variant="h3">Settings</Typography>
      </Card.Header>
      <Card.Body>
        <Box display="flex" direction="column" gap="md">
          <Switch
            label="Email notifications"
            helperText="Receive email updates about your account"
            defaultChecked
          />
          <Switch
            label="SMS notifications"
            helperText="Receive text message alerts"
          />
          <Switch
            label="Marketing emails"
            helperText="Receive promotional content and offers"
          />
        </Box>
      </Card.Body>
    </Card>
  ),
};

