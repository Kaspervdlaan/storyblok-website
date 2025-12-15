import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';
import { Typography } from '../Typography';

const meta: Meta<typeof Box> = {
  title: 'Atoms/Box',
  component: Box,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'text',
    },
    padding: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    display: {
      control: 'select',
      options: ['block', 'flex', 'inline-flex', 'grid', 'inline-block'],
    },
    direction: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
    },
    background: {
      control: 'select',
      options: ['none', 'surface', 'muted', 'primary', 'secondary', 'dark'],
    },
    border: {
      control: 'select',
      options: ['none', 'default', 'muted'],
    },
    shadow: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

// Placeholder box for demos
const DemoBox = ({ label }: { label: string }) => (
  <Box
    padding="md"
    background="primary"
    border="default"
    radius="md"
  >
    <Typography variant="bodySm" weight="bold">{label}</Typography>
  </Box>
);

// ----------------------------------------------------------------------------
// DEFAULT
// ----------------------------------------------------------------------------

export const Default: Story = {
  args: {
    padding: 'md',
    background: 'surface',
    border: 'default',
    radius: 'md',
    shadow: 'md',
    children: (
      <Typography variant="body">
        Box is a foundational layout primitive that accepts styling props.
      </Typography>
    ),
  },
};

// ----------------------------------------------------------------------------
// PADDING
// ----------------------------------------------------------------------------

export const Padding: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="md">
      {(['none', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Box key={size} padding={size} background="muted" border="default" radius="sm">
          <Typography variant="bodySm">padding="{size}"</Typography>
        </Box>
      ))}
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// FLEX LAYOUTS
// ----------------------------------------------------------------------------

export const FlexRow: Story = {
  render: () => (
    <Box display="flex" direction="row" gap="md" align="center">
      <DemoBox label="1" />
      <DemoBox label="2" />
      <DemoBox label="3" />
    </Box>
  ),
};

export const FlexColumn: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="md" style={{ maxWidth: '300px' }}>
      <DemoBox label="1" />
      <DemoBox label="2" />
      <DemoBox label="3" />
    </Box>
  ),
};

export const FlexJustify: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg">
      <Box display="flex" justify="start" gap="sm" padding="md" background="muted" radius="md">
        <DemoBox label="start" />
        <DemoBox label="start" />
      </Box>
      <Box display="flex" justify="center" gap="sm" padding="md" background="muted" radius="md">
        <DemoBox label="center" />
        <DemoBox label="center" />
      </Box>
      <Box display="flex" justify="end" gap="sm" padding="md" background="muted" radius="md">
        <DemoBox label="end" />
        <DemoBox label="end" />
      </Box>
      <Box display="flex" justify="between" gap="sm" padding="md" background="muted" radius="md">
        <DemoBox label="between" />
        <DemoBox label="between" />
      </Box>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// BACKGROUNDS
// ----------------------------------------------------------------------------

export const Backgrounds: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="md">
      <Box padding="lg" background="surface" border="default" radius="md">
        <Typography variant="body">Surface (white)</Typography>
      </Box>
      <Box padding="lg" background="muted" border="default" radius="md">
        <Typography variant="body">Muted (light)</Typography>
      </Box>
      <Box padding="lg" background="primary" border="default" radius="md">
        <Typography variant="body">Primary (gamboge)</Typography>
      </Box>
      <Box padding="lg" background="secondary" border="default" radius="md">
        <Typography variant="body">Secondary (viridian)</Typography>
      </Box>
      <Box padding="lg" background="dark" border="default" radius="md">
        <Typography variant="body">Dark (rich black)</Typography>
      </Box>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// SHADOWS
// ----------------------------------------------------------------------------

export const Shadows: Story = {
  render: () => (
    <Box display="flex" gap="xl" padding="lg">
      <Box padding="lg" background="surface" border="default" radius="md" shadow="sm">
        <Typography variant="bodySm">shadow="sm"</Typography>
      </Box>
      <Box padding="lg" background="surface" border="default" radius="md" shadow="md">
        <Typography variant="bodySm">shadow="md"</Typography>
      </Box>
      <Box padding="lg" background="surface" border="default" radius="md" shadow="lg">
        <Typography variant="bodySm">shadow="lg"</Typography>
      </Box>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// BORDER RADIUS
// ----------------------------------------------------------------------------

export const BorderRadius: Story = {
  render: () => (
    <Box display="flex" gap="md" align="center">
      {(['none', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Box
          key={size}
          padding="lg"
          background="primary"
          border="default"
          radius={size}
          style={{ width: '80px', height: '80px' }}
          display="flex"
          align="center"
          justify="center"
        >
          <Typography variant="caption">{size}</Typography>
        </Box>
      ))}
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// COMPOSITION EXAMPLE
// ----------------------------------------------------------------------------

export const CompositionExample: Story = {
  render: () => (
    <Box
      padding="lg"
      background="surface"
      border="default"
      radius="lg"
      shadow="md"
      style={{ maxWidth: '400px' }}
    >
      <Box display="flex" direction="column" gap="md">
        <Box display="flex" align="center" gap="md">
          <Box
            padding="md"
            background="primary"
            border="default"
            radius="md"
            display="flex"
            align="center"
            justify="center"
            style={{ width: '48px', height: '48px' }}
          >
            🚀
          </Box>
          <Box display="flex" direction="column" gap="xs">
            <Typography variant="h3">Box Composition</Typography>
            <Typography variant="bodySm" tone="muted">Build layouts with Box</Typography>
          </Box>
        </Box>
        <Typography variant="body">
          The Box component is a primitive that can be composed to create any layout.
          Use it as a building block for more complex components.
        </Typography>
        <Box display="flex" gap="sm" justify="end">
          <Box padding="sm" paddingX="md" background="muted" border="default" radius="sm">
            <Typography variant="caption">Cancel</Typography>
          </Box>
          <Box padding="sm" paddingX="md" background="primary" border="default" radius="sm">
            <Typography variant="caption">Confirm</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// AS DIFFERENT ELEMENTS
// ----------------------------------------------------------------------------

export const AsDifferentElements: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="md">
      <Box as="article" padding="md" background="muted" border="default" radius="md">
        <Typography variant="bodySm">Rendered as &lt;article&gt;</Typography>
      </Box>
      <Box as="section" padding="md" background="muted" border="default" radius="md">
        <Typography variant="bodySm">Rendered as &lt;section&gt;</Typography>
      </Box>
      <Box as="aside" padding="md" background="muted" border="default" radius="md">
        <Typography variant="bodySm">Rendered as &lt;aside&gt;</Typography>
      </Box>
      <Box as="nav" padding="md" background="muted" border="default" radius="md">
        <Typography variant="bodySm">Rendered as &lt;nav&gt;</Typography>
      </Box>
    </Box>
  ),
};

