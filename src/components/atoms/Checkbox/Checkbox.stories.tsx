import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { Card } from '../../molecules/Card';

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
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
    indeterminate: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// ----------------------------------------------------------------------------
// DEFAULT
// ----------------------------------------------------------------------------

export const Default: Story = {
  args: {
    label: 'Checkbox label',
    size: 'md',
  },
};

// ----------------------------------------------------------------------------
// WITH LABEL
// ----------------------------------------------------------------------------

export const WithLabel: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

// ----------------------------------------------------------------------------
// WITH HELPER TEXT
// ----------------------------------------------------------------------------

export const WithHelperText: Story = {
  args: {
    label: 'Subscribe to newsletter',
    helperText: 'Receive updates about new features and products',
  },
};

// ----------------------------------------------------------------------------
// WITH ERROR
// ----------------------------------------------------------------------------

export const WithError: Story = {
  args: {
    label: 'I agree to the terms',
    error: 'You must accept the terms to continue',
  },
};

// ----------------------------------------------------------------------------
// SIZES
// ----------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg">
      <Checkbox size="sm" label="Small checkbox" />
      <Checkbox size="md" label="Medium checkbox" />
      <Checkbox size="lg" label="Large checkbox" />
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// LABEL POSITIONS
// ----------------------------------------------------------------------------

export const LabelPositions: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg">
      <Checkbox label="Label on the right (default)" labelPosition="right" />
      <Checkbox label="Label on the left" labelPosition="left" />
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// INDETERMINATE
// ----------------------------------------------------------------------------

export const Indeterminate: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const [indeterminate, setIndeterminate] = useState(true);

    return (
      <Box display="flex" direction="column" gap="md">
        <Checkbox
          label="Select all items"
          checked={checked}
          indeterminate={indeterminate}
          onChange={(e) => {
            setChecked(e.target.checked);
            setIndeterminate(false);
          }}
        />
        <Box marginLeft="md" display="flex" direction="column" gap="sm">
          <Checkbox label="Item 1" checked={checked} />
          <Checkbox label="Item 2" checked={checked} />
          <Checkbox label="Item 3" checked={checked} />
        </Box>
      </Box>
    );
  },
};

// ----------------------------------------------------------------------------
// STATES
// ----------------------------------------------------------------------------

export const States: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg">
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// CHECKBOX GROUP
// ----------------------------------------------------------------------------

export const CheckboxGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);

    const items = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

    return (
      <Card variant="outlined" padding="md" style={{ maxWidth: '400px' }}>
        <Typography variant="h3" style={{ marginBottom: '1rem' }}>
          Select Options
        </Typography>
        <Box display="flex" direction="column" gap="md">
          {items.map((item) => (
            <Checkbox
              key={item}
              label={item}
              checked={selected.includes(item)}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelected([...selected, item]);
                } else {
                  setSelected(selected.filter((s) => s !== item));
                }
              }}
            />
          ))}
        </Box>
      </Card>
    );
  },
};

// ----------------------------------------------------------------------------
// FORM EXAMPLE
// ----------------------------------------------------------------------------

export const FormExample: Story = {
  render: () => (
    <Card variant="elevated" padding="lg" style={{ maxWidth: '400px' }}>
      <Card.Header>
        <Typography variant="h3">Preferences</Typography>
      </Card.Header>
      <Card.Body>
        <Box display="flex" direction="column" gap="md">
          <Checkbox
            label="Email notifications"
            helperText="Receive email updates about your account"
          />
          <Checkbox
            label="SMS notifications"
            helperText="Receive text message alerts"
          />
          <Checkbox
            label="Marketing emails"
            helperText="Receive promotional content and offers"
          />
        </Box>
      </Card.Body>
    </Card>
  ),
};

