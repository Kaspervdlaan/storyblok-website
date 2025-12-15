import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Divider } from '../Divider';

const meta: Meta<typeof Stack> = {
  title: 'Atoms/Stack',
  component: Stack,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
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
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

// Demo item
const DemoItem = ({ label, height }: { label: string; height?: string }) => (
  <Box
    padding="md"
    background="primary"
    border="default"
    radius="md"
    style={{ height }}
  >
    <Typography variant="bodySm" weight="bold">{label}</Typography>
  </Box>
);

// ============================================================================
// DEFAULT
// ============================================================================

export const Default: Story = {
  args: {
    direction: 'column',
    gap: 'md',
    children: (
      <>
        <DemoItem label="Item 1" />
        <DemoItem label="Item 2" />
        <DemoItem label="Item 3" />
      </>
    ),
  },
};

// ============================================================================
// DIRECTION
// ============================================================================

export const DirectionRow: Story = {
  render: () => (
    <Stack direction="row" gap="md">
      <DemoItem label="1" />
      <DemoItem label="2" />
      <DemoItem label="3" />
    </Stack>
  ),
};

export const DirectionColumn: Story = {
  render: () => (
    <Stack direction="column" gap="md">
      <DemoItem label="1" />
      <DemoItem label="2" />
      <DemoItem label="3" />
    </Stack>
  ),
};

// ============================================================================
// ALIGNMENT
// ============================================================================

export const AlignItems: Story = {
  render: () => (
    <Stack direction="column" gap="lg">
      <Stack direction="row" gap="md" align="start">
        <DemoItem label="Start" height="40px" />
        <DemoItem label="Start" height="60px" />
        <DemoItem label="Start" height="50px" />
      </Stack>
      <Stack direction="row" gap="md" align="center">
        <DemoItem label="Center" height="40px" />
        <DemoItem label="Center" height="60px" />
        <DemoItem label="Center" height="50px" />
      </Stack>
      <Stack direction="row" gap="md" align="end">
        <DemoItem label="End" height="40px" />
        <DemoItem label="End" height="60px" />
        <DemoItem label="End" height="50px" />
      </Stack>
    </Stack>
  ),
};

export const JustifyContent: Story = {
  render: () => (
    <Stack direction="column" gap="lg">
      <Box padding="md" background="muted" radius="md">
        <Stack direction="row" gap="sm" justify="start">
          <DemoItem label="Start" />
          <DemoItem label="Start" />
        </Stack>
      </Box>
      <Box padding="md" background="muted" radius="md">
        <Stack direction="row" gap="sm" justify="center">
          <DemoItem label="Center" />
          <DemoItem label="Center" />
        </Stack>
      </Box>
      <Box padding="md" background="muted" radius="md">
        <Stack direction="row" gap="sm" justify="end">
          <DemoItem label="End" />
          <DemoItem label="End" />
        </Stack>
      </Box>
      <Box padding="md" background="muted" radius="md">
        <Stack direction="row" justify="between">
          <DemoItem label="Between" />
          <DemoItem label="Between" />
        </Stack>
      </Box>
    </Stack>
  ),
};

// ============================================================================
// GAP
// ============================================================================

export const GapSizes: Story = {
  render: () => (
    <Stack direction="column" gap="xl">
      {(['none', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Stack key={size} direction="column" gap="xs">
          <Typography variant="caption">gap="{size}"</Typography>
          <Stack direction="row" gap={size}>
            <DemoItem label="1" />
            <DemoItem label="2" />
            <DemoItem label="3" />
          </Stack>
        </Stack>
      ))}
    </Stack>
  ),
};

// ============================================================================
// WITH DIVIDER
// ============================================================================

export const WithDivider: Story = {
  render: () => (
    <Stack direction="column" gap="lg">
      <Stack direction="column" gap="xs">
        <Typography variant="caption">Vertical Stack with Divider</Typography>
        <Stack
          direction="column"
          gap="md"
          divider={<Divider />}
        >
          <Typography variant="body">First item</Typography>
          <Typography variant="body">Second item</Typography>
          <Typography variant="body">Third item</Typography>
        </Stack>
      </Stack>

      <Stack direction="column" gap="xs">
        <Typography variant="caption">Horizontal Stack with Divider</Typography>
        <Stack
          direction="row"
          gap="md"
          align="center"
          divider={<Divider orientation="vertical" style={{ height: '24px' }} />}
        >
          <Typography variant="body">Home</Typography>
          <Typography variant="body">Products</Typography>
          <Typography variant="body">About</Typography>
        </Stack>
      </Stack>
    </Stack>
  ),
};

// ============================================================================
// WRAPPING
// ============================================================================

export const Wrapping: Story = {
  render: () => (
    <Stack direction="column" gap="lg">
      <Stack direction="column" gap="xs">
        <Typography variant="caption">wrap="wrap"</Typography>
        <Box style={{ width: '300px' }} padding="md" background="muted" radius="md">
          <Stack direction="row" gap="sm" wrap="wrap">
            <DemoItem label="Item 1" />
            <DemoItem label="Item 2" />
            <DemoItem label="Item 3" />
            <DemoItem label="Item 4" />
            <DemoItem label="Item 5" />
          </Stack>
        </Box>
      </Stack>
    </Stack>
  ),
};

// ============================================================================
// BUTTONS EXAMPLE
// ============================================================================

export const ButtonStack: Story = {
  render: () => (
    <Stack direction="column" gap="lg">
      <Stack direction="column" gap="xs">
        <Typography variant="caption">Horizontal Buttons</Typography>
        <Stack direction="row" gap="sm">
          <Button variant="primary">Save</Button>
          <Button variant="secondary">Cancel</Button>
          <Button variant="ghost">Reset</Button>
        </Stack>
      </Stack>

      <Stack direction="column" gap="xs">
        <Typography variant="caption">Vertical Buttons</Typography>
        <Stack direction="column" gap="sm" style={{ width: '200px' }}>
          <Button variant="primary" fullWidth>Sign In</Button>
          <Button variant="secondary" fullWidth>Create Account</Button>
          <Button variant="ghost" fullWidth>Forgot Password?</Button>
        </Stack>
      </Stack>

      <Stack direction="column" gap="xs">
        <Typography variant="caption">Spread Buttons</Typography>
        <Stack direction="row" justify="between" style={{ width: '400px' }}>
          <Button variant="ghost">Back</Button>
          <Stack direction="row" gap="sm">
            <Button variant="secondary">Save Draft</Button>
            <Button variant="primary">Publish</Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  ),
};

// ============================================================================
// INLINE
// ============================================================================

export const InlineStack: Story = {
  render: () => (
    <Typography variant="body">
      This is text with an
      <Stack inline direction="row" gap="xs" align="center" style={{ margin: '0 0.25rem' }}>
        <Box padding="xs" background="primary" radius="sm">
          <Typography variant="caption">inline</Typography>
        </Box>
        <Box padding="xs" background="secondary" radius="sm">
          <Typography variant="caption">stack</Typography>
        </Box>
      </Stack>
      inside of it.
    </Typography>
  ),
};

// ============================================================================
// NESTED STACKS
// ============================================================================

export const NestedStacks: Story = {
  render: () => (
    <Stack direction="column" gap="lg">
      <Stack direction="row" gap="md" align="start">
        <Stack direction="column" gap="sm">
          <DemoItem label="Col 1 - Item 1" />
          <DemoItem label="Col 1 - Item 2" />
        </Stack>
        <Stack direction="column" gap="sm">
          <DemoItem label="Col 2 - Item 1" />
          <DemoItem label="Col 2 - Item 2" />
          <DemoItem label="Col 2 - Item 3" />
        </Stack>
        <Stack direction="column" gap="sm">
          <DemoItem label="Col 3 - Item 1" />
        </Stack>
      </Stack>
    </Stack>
  ),
};

