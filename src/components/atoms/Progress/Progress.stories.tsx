import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';
import { Box } from '../Box';
import { Typography } from '../Typography';

const meta: Meta<typeof Progress> = {
  title: 'Atoms/Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const Linear: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg" style={{ maxWidth: '400px' }}>
      <Progress value={25} />
      <Progress value={50} />
      <Progress value={75} />
      <Progress value={100} />
    </Box>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg" style={{ maxWidth: '400px' }}>
      <Progress value={25} showLabel />
      <Progress value={50} showLabel />
      <Progress value={75} showLabel />
    </Box>
  ),
};

export const Indeterminate: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg" style={{ maxWidth: '400px' }}>
      <Progress indeterminate />
    </Box>
  ),
};

export const Circular: Story = {
  render: () => (
    <Box display="flex" gap="lg" align="center" style={{ flexWrap: 'wrap' }}>
      <Progress variant="circular" value={25} />
      <Progress variant="circular" value={50} />
      <Progress variant="circular" value={75} />
      <Progress variant="circular" value={100} />
    </Box>
  ),
};

export const CircularWithLabel: Story = {
  render: () => (
    <Box display="flex" gap="lg" align="center" style={{ flexWrap: 'wrap' }}>
      <Progress variant="circular" value={25} showLabel />
      <Progress variant="circular" value={50} showLabel />
      <Progress variant="circular" value={75} showLabel />
    </Box>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg" style={{ maxWidth: '400px' }}>
      <Box display="flex" direction="column" gap="xs">
        <Typography variant="caption">SMALL</Typography>
        <Progress size="sm" value={50} />
      </Box>
      <Box display="flex" direction="column" gap="xs">
        <Typography variant="caption">MEDIUM</Typography>
        <Progress size="md" value={50} />
      </Box>
      <Box display="flex" direction="column" gap="xs">
        <Typography variant="caption">LARGE</Typography>
        <Progress size="lg" value={50} />
      </Box>
    </Box>
  ),
};

