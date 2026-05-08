import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from './RadioGroup';
import { Box } from '../../atoms/Box';
import { Card } from '../Card';

const meta: Meta<typeof RadioGroup> = {
  title: 'Molecules/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

// ----------------------------------------------------------------------------
// DEFAULT
// ----------------------------------------------------------------------------

export const Default: Story = {
  args: {
    name: 'plan',
    label: 'Select a plan',
    options: [
      { value: 'basic', label: 'Basic' },
      { value: 'pro', label: 'Pro' },
      { value: 'enterprise', label: 'Enterprise' },
    ],
  },
};

// ----------------------------------------------------------------------------
// CONTROLLED
// ----------------------------------------------------------------------------

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('pro');
    return (
      <RadioGroup
        name="plan-controlled"
        label="Select a plan"
        value={value}
        onChange={setValue}
        options={[
          { value: 'basic', label: 'Basic' },
          { value: 'pro', label: 'Pro' },
          { value: 'enterprise', label: 'Enterprise' },
        ]}
      />
    );
  },
};

// ----------------------------------------------------------------------------
// WITH HELPER TEXT
// ----------------------------------------------------------------------------

export const WithHelperText: Story = {
  args: {
    name: 'plan-helper',
    label: 'Select a plan',
    helperText: 'You can change your plan at any time',
    options: [
      { value: 'basic', label: 'Basic', helperText: '$9/month' },
      { value: 'pro', label: 'Pro', helperText: '$29/month' },
      { value: 'enterprise', label: 'Enterprise', helperText: 'Custom pricing' },
    ],
  },
};

// ----------------------------------------------------------------------------
// WITH ERROR
// ----------------------------------------------------------------------------

export const WithError: Story = {
  args: {
    name: 'plan-error',
    label: 'Select a plan',
    error: 'Please select a plan to continue',
    options: [
      { value: 'basic', label: 'Basic' },
      { value: 'pro', label: 'Pro' },
      { value: 'enterprise', label: 'Enterprise' },
    ],
  },
};

// ----------------------------------------------------------------------------
// ORIENTATIONS
// ----------------------------------------------------------------------------

export const Orientations: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="xl">
      <Box display="flex" direction="column" gap="md">
        <h3>Vertical (default)</h3>
        <RadioGroup
          name="orientation-vertical"
          orientation="vertical"
          options={[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
          ]}
        />
      </Box>
      <Box display="flex" direction="column" gap="md">
        <h3>Horizontal</h3>
        <RadioGroup
          name="orientation-horizontal"
          orientation="horizontal"
          options={[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
          ]}
        />
      </Box>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// SIZES
// ----------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="xl">
      <Box display="flex" direction="column" gap="md">
        <h3>Small</h3>
        <RadioGroup
          name="size-sm"
          size="sm"
          options={[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
          ]}
        />
      </Box>
      <Box display="flex" direction="column" gap="md">
        <h3>Medium</h3>
        <RadioGroup
          name="size-md"
          size="md"
          options={[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
          ]}
        />
      </Box>
      <Box display="flex" direction="column" gap="md">
        <h3>Large</h3>
        <RadioGroup
          name="size-lg"
          size="lg"
          options={[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
          ]}
        />
      </Box>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// WITH DISABLED OPTIONS
// ----------------------------------------------------------------------------

export const WithDisabledOptions: Story = {
  args: {
    name: 'plan-disabled',
    label: 'Select a plan',
    options: [
      { value: 'basic', label: 'Basic' },
      { value: 'pro', label: 'Pro', disabled: true },
      { value: 'enterprise', label: 'Enterprise' },
    ],
  },
};

// ----------------------------------------------------------------------------
// FORM EXAMPLE
// ----------------------------------------------------------------------------

export const FormExample: Story = {
  render: () => {
    const [plan, setPlan] = useState('');
    return (
      <Card variant="elevated" padding="lg" style={{ maxWidth: '400px' }}>
        <Card.Header>
          <h3>Choose Your Plan</h3>
        </Card.Header>
        <Card.Body>
          <RadioGroup
            name="plan-form"
            label="Subscription Plan"
            value={plan}
            onChange={setPlan}
            helperText="Select the plan that best fits your needs"
            options={[
              { value: 'basic', label: 'Basic Plan', helperText: '$9/month - Perfect for individuals' },
              { value: 'pro', label: 'Pro Plan', helperText: '$29/month - Best for teams' },
              { value: 'enterprise', label: 'Enterprise', helperText: 'Custom pricing - Contact sales' },
            ]}
          />
        </Card.Body>
      </Card>
    );
  },
};

