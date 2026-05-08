import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { Button } from '../Button';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'warning', 'neutral'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    dot: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// ----------------------------------------------------------------------------
// DEFAULT
// ----------------------------------------------------------------------------

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'primary',
    size: 'md',
  },
};

// ----------------------------------------------------------------------------
// VARIANTS
// ----------------------------------------------------------------------------

export const Variants: Story = {
  render: () => (
    <Box display="flex" gap="md" align="center" style={{ flexWrap: 'wrap' }}>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="neutral">Neutral</Badge>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// SIZES
// ----------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => (
    <Box display="flex" gap="md" align="center" style={{ flexWrap: 'wrap' }}>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// DOT VARIANT
// ----------------------------------------------------------------------------

export const Dot: Story = {
  render: () => (
    <Box display="flex" gap="md" align="center" style={{ flexWrap: 'wrap' }}>
      <Badge dot size="sm" variant="primary" />
      <Badge dot size="md" variant="secondary" />
      <Badge dot size="lg" variant="danger" />
      <Badge dot size="md" variant="success" />
      <Badge dot size="md" variant="warning" />
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// WITH BUTTON
// ----------------------------------------------------------------------------

export const WithButton: Story = {
  render: () => (
    <Box display="flex" gap="md" align="center" style={{ flexWrap: 'wrap' }}>
      <Button variant="primary">
        Notifications
        <Badge variant="danger" size="sm" style={{ marginLeft: '8px' }}>
          5
        </Badge>
      </Button>
      <Button variant="secondary">
        Messages
        <Badge variant="primary" size="sm" style={{ marginLeft: '8px' }}>
          12
        </Badge>
      </Button>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// ALL VARIANTS GRID
// ----------------------------------------------------------------------------

export const AllVariantsGrid: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg">
      <Box display="flex" direction="column" gap="md">
        <Typography variant="caption">VARIANTS</Typography>
        <Box display="flex" gap="md" style={{ flexWrap: 'wrap' }}>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="neutral">Neutral</Badge>
        </Box>
      </Box>

      <Box display="flex" direction="column" gap="md">
        <Typography variant="caption">SIZES</Typography>
        <Box display="flex" gap="md" align="center" style={{ flexWrap: 'wrap' }}>
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
          <Badge size="lg">Large</Badge>
        </Box>
      </Box>

      <Box display="flex" direction="column" gap="md">
        <Typography variant="caption">DOT VARIANTS</Typography>
        <Box display="flex" gap="md" align="center" style={{ flexWrap: 'wrap' }}>
          <Badge dot variant="primary" />
          <Badge dot variant="secondary" />
          <Badge dot variant="danger" />
          <Badge dot variant="success" />
          <Badge dot variant="warning" />
        </Box>
      </Box>
    </Box>
  ),
};

