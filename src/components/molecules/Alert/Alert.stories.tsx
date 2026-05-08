import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import { Box } from '../../atoms/Box';
import { Typography } from '../../atoms/Typography';

const meta: Meta<typeof Alert> = {
  title: 'Molecules/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    dismissible: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

// ----------------------------------------------------------------------------
// DEFAULT
// ----------------------------------------------------------------------------

export const Default: Story = {
  args: {
    children: 'This is an alert message.',
    variant: 'info',
    size: 'md',
  },
};

// ----------------------------------------------------------------------------
// VARIANTS
// ----------------------------------------------------------------------------

export const Variants: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="md" style={{ maxWidth: '600px' }}>
      <Alert variant="info" title="Info">
        This is an informational alert.
      </Alert>
      <Alert variant="success" title="Success">
        Your action was completed successfully.
      </Alert>
      <Alert variant="warning" title="Warning">
        Please review this information carefully.
      </Alert>
      <Alert variant="error" title="Error">
        Something went wrong. Please try again.
      </Alert>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// SIZES
// ----------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="md" style={{ maxWidth: '600px' }}>
      <Alert variant="info" size="sm">
        Small alert message
      </Alert>
      <Alert variant="info" size="md">
        Medium alert message
      </Alert>
      <Alert variant="info" size="lg">
        Large alert message
      </Alert>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// DISMISSIBLE
// ----------------------------------------------------------------------------

export const Dismissible: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="md" style={{ maxWidth: '600px' }}>
      <Alert variant="info" dismissible title="Dismissible Alert">
        This alert can be dismissed by clicking the close button.
      </Alert>
      <Alert variant="success" dismissible>
        Success message that can be dismissed.
      </Alert>
      <Alert variant="warning" dismissible>
        Warning message that can be dismissed.
      </Alert>
      <Alert variant="error" dismissible>
        Error message that can be dismissed.
      </Alert>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// WITH TITLE
// ----------------------------------------------------------------------------

export const WithTitle: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="md" style={{ maxWidth: '600px' }}>
      <Alert variant="info" title="Information">
        This alert has a title and message content.
      </Alert>
      <Alert variant="success" title="Success!" dismissible>
        Your changes have been saved successfully.
      </Alert>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// WITHOUT ICON
// ----------------------------------------------------------------------------

export const WithoutIcon: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="md" style={{ maxWidth: '600px' }}>
      <Alert variant="info" icon={null}>
        This alert has no icon.
      </Alert>
      <Alert variant="success" icon={null} title="No Icon">
        Custom icon can be provided or removed.
      </Alert>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// LONG CONTENT
// ----------------------------------------------------------------------------

export const LongContent: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="md" style={{ maxWidth: '600px' }}>
      <Alert variant="warning" title="Important Notice" dismissible>
        This is a longer alert message that demonstrates how the component handles
        multiple lines of text. The alert will wrap appropriately and maintain
        proper spacing and alignment with the icon and close button.
      </Alert>
    </Box>
  ),
};

