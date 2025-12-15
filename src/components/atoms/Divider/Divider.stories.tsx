import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';
import { Box } from '../Box';
import { Typography } from '../Typography';

const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
    },
    weight: {
      control: 'select',
      options: ['thin', 'medium', 'thick'],
    },
    spacing: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'primary', 'secondary'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

// ----------------------------------------------------------------------------
// DEFAULT
// ----------------------------------------------------------------------------

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    variant: 'solid',
    weight: 'medium',
    spacing: 'md',
    color: 'default',
  },
};

// ----------------------------------------------------------------------------
// VARIANTS
// ----------------------------------------------------------------------------

export const Variants: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg" style={{ maxWidth: '400px' }}>
      <Box>
        <Typography variant="caption">SOLID</Typography>
        <Divider variant="solid" />
      </Box>
      <Box>
        <Typography variant="caption">DASHED</Typography>
        <Divider variant="dashed" />
      </Box>
      <Box>
        <Typography variant="caption">DOTTED</Typography>
        <Divider variant="dotted" />
      </Box>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// WEIGHTS
// ----------------------------------------------------------------------------

export const Weights: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg" style={{ maxWidth: '400px' }}>
      <Box>
        <Typography variant="caption">THIN (1px)</Typography>
        <Divider weight="thin" />
      </Box>
      <Box>
        <Typography variant="caption">MEDIUM (2px)</Typography>
        <Divider weight="medium" />
      </Box>
      <Box>
        <Typography variant="caption">THICK (3px)</Typography>
        <Divider weight="thick" />
      </Box>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// COLORS
// ----------------------------------------------------------------------------

export const Colors: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg" style={{ maxWidth: '400px' }}>
      <Box>
        <Typography variant="caption">DEFAULT (BLACK)</Typography>
        <Divider color="default" weight="thick" />
      </Box>
      <Box>
        <Typography variant="caption">MUTED</Typography>
        <Divider color="muted" weight="thick" />
      </Box>
      <Box>
        <Typography variant="caption">PRIMARY</Typography>
        <Divider color="primary" weight="thick" />
      </Box>
      <Box>
        <Typography variant="caption">SECONDARY</Typography>
        <Divider color="secondary" weight="thick" />
      </Box>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// WITH LABEL
// ----------------------------------------------------------------------------

export const WithLabel: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg" style={{ maxWidth: '500px' }}>
      <Divider label="Or continue with" />
      <Divider label="Section Break" variant="dashed" />
      <Divider label="New Chapter" color="primary" weight="thick" />
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// VERTICAL
// ----------------------------------------------------------------------------

export const Vertical: Story = {
  render: () => (
    <Box display="flex" align="center" gap="md" style={{ height: '100px' }}>
      <Typography variant="body">Left</Typography>
      <Divider orientation="vertical" />
      <Typography variant="body">Center</Typography>
      <Divider orientation="vertical" color="primary" />
      <Typography variant="body">Right</Typography>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// IN CONTEXT - CARD
// ----------------------------------------------------------------------------

export const InCard: Story = {
  render: () => (
    <Box
      padding="lg"
      background="surface"
      border="default"
      radius="lg"
      shadow="md"
      style={{ maxWidth: '400px' }}
    >
      <Typography variant="h3">Card Title</Typography>
      <Typography variant="bodySm" tone="muted">
        Some description text here.
      </Typography>
      <Divider spacing="md" color="muted" />
      <Typography variant="body">
        Content below the divider. This could be more details or actions.
      </Typography>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// IN CONTEXT - FORM
// ----------------------------------------------------------------------------

export const InForm: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="md" style={{ maxWidth: '400px' }}>
      <Typography variant="h3">Sign Up</Typography>
      <Box padding="md" background="muted" radius="md">
        <Typography variant="bodySm">Email form would go here</Typography>
      </Box>
      <Divider label="Or" spacing="sm" />
      <Box display="flex" direction="column" gap="sm">
        <Box padding="md" background="surface" border="default" radius="md">
          <Typography variant="bodySm" align="center">Continue with Google</Typography>
        </Box>
        <Box padding="md" background="surface" border="default" radius="md">
          <Typography variant="bodySm" align="center">Continue with GitHub</Typography>
        </Box>
      </Box>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// SPACING COMPARISON
// ----------------------------------------------------------------------------

export const SpacingComparison: Story = {
  render: () => (
    <Box display="flex" direction="column" style={{ maxWidth: '400px' }}>
      <Typography variant="bodySm">spacing="none"</Typography>
      <Divider spacing="none" />
      <Typography variant="bodySm">spacing="sm"</Typography>
      <Divider spacing="sm" />
      <Typography variant="bodySm">spacing="md"</Typography>
      <Divider spacing="md" />
      <Typography variant="bodySm">spacing="lg"</Typography>
      <Divider spacing="lg" />
      <Typography variant="bodySm">spacing="xl"</Typography>
      <Divider spacing="xl" />
      <Typography variant="bodySm">End</Typography>
    </Box>
  ),
};

