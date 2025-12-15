import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { Box } from '../Box';
import { Typography } from '../Typography';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'warning', 'neutral', 'dark'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'ghost'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

// ----------------------------------------------------------------------------
// SAMPLE ICONS
// ----------------------------------------------------------------------------

const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const AlertIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

// ----------------------------------------------------------------------------
// DEFAULT
// ----------------------------------------------------------------------------

export const Default: Story = {
  args: {
    children: <RocketIcon />,
    size: 'md',
    color: 'primary',
    variant: 'filled',
  },
};

// ----------------------------------------------------------------------------
// SIZES
// ----------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => (
    <Box display="flex" gap="md" align="end">
      <Box display="flex" direction="column" align="center" gap="sm">
        <Icon size="xs" color="primary"><StarIcon /></Icon>
        <Typography variant="caption">xs</Typography>
      </Box>
      <Box display="flex" direction="column" align="center" gap="sm">
        <Icon size="sm" color="primary"><StarIcon /></Icon>
        <Typography variant="caption">sm</Typography>
      </Box>
      <Box display="flex" direction="column" align="center" gap="sm">
        <Icon size="md" color="primary"><StarIcon /></Icon>
        <Typography variant="caption">md</Typography>
      </Box>
      <Box display="flex" direction="column" align="center" gap="sm">
        <Icon size="lg" color="primary"><StarIcon /></Icon>
        <Typography variant="caption">lg</Typography>
      </Box>
      <Box display="flex" direction="column" align="center" gap="sm">
        <Icon size="xl" color="primary"><StarIcon /></Icon>
        <Typography variant="caption">xl</Typography>
      </Box>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// COLORS (FILLED)
// ----------------------------------------------------------------------------

export const ColorsFilled: Story = {
  render: () => (
    <Box display="flex" gap="md" align="center">
      <Icon color="primary"><RocketIcon /></Icon>
      <Icon color="secondary"><RocketIcon /></Icon>
      <Icon color="success"><CheckIcon /></Icon>
      <Icon color="danger"><HeartIcon /></Icon>
      <Icon color="warning"><AlertIcon /></Icon>
      <Icon color="neutral"><StarIcon /></Icon>
      <Icon color="dark"><StarIcon /></Icon>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// COLORS (OUTLINED)
// ----------------------------------------------------------------------------

export const ColorsOutlined: Story = {
  render: () => (
    <Box display="flex" gap="md" align="center">
      <Icon variant="outlined" color="primary"><RocketIcon /></Icon>
      <Icon variant="outlined" color="secondary"><RocketIcon /></Icon>
      <Icon variant="outlined" color="success"><CheckIcon /></Icon>
      <Icon variant="outlined" color="danger"><HeartIcon /></Icon>
      <Icon variant="outlined" color="warning"><AlertIcon /></Icon>
      <Icon variant="outlined" color="neutral"><StarIcon /></Icon>
      <Icon variant="outlined" color="dark"><StarIcon /></Icon>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// COLORS (GHOST)
// ----------------------------------------------------------------------------

export const ColorsGhost: Story = {
  render: () => (
    <Box display="flex" gap="md" align="center">
      <Icon variant="ghost" color="primary"><RocketIcon /></Icon>
      <Icon variant="ghost" color="secondary"><RocketIcon /></Icon>
      <Icon variant="ghost" color="success"><CheckIcon /></Icon>
      <Icon variant="ghost" color="danger"><HeartIcon /></Icon>
      <Icon variant="ghost" color="warning"><AlertIcon /></Icon>
      <Icon variant="ghost" color="neutral"><StarIcon /></Icon>
      <Icon variant="ghost" color="dark"><StarIcon /></Icon>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// VARIANTS COMPARISON
// ----------------------------------------------------------------------------

export const Variants: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg">
      <Box display="flex" gap="md" align="center">
        <Icon variant="filled" color="primary" size="lg"><RocketIcon /></Icon>
        <Box display="flex" direction="column" gap="xs">
          <Typography variant="body" weight="bold">Filled</Typography>
          <Typography variant="bodySm" tone="muted">Solid background with border</Typography>
        </Box>
      </Box>
      <Box display="flex" gap="md" align="center">
        <Icon variant="outlined" color="primary" size="lg"><RocketIcon /></Icon>
        <Box display="flex" direction="column" gap="xs">
          <Typography variant="body" weight="bold">Outlined</Typography>
          <Typography variant="bodySm" tone="muted">Colored border, transparent background</Typography>
        </Box>
      </Box>
      <Box display="flex" gap="md" align="center">
        <Icon variant="ghost" color="primary" size="lg"><RocketIcon /></Icon>
        <Box display="flex" direction="column" gap="xs">
          <Typography variant="body" weight="bold">Ghost</Typography>
          <Typography variant="bodySm" tone="muted">Just the icon, no container</Typography>
        </Box>
      </Box>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// WITH EMOJI
// ----------------------------------------------------------------------------

export const WithEmoji: Story = {
  render: () => (
    <Box display="flex" gap="md" align="center">
      <Icon size="lg" color="primary">🚀</Icon>
      <Icon size="lg" color="secondary">🎨</Icon>
      <Icon size="lg" color="success">✅</Icon>
      <Icon size="lg" color="danger">❤️</Icon>
      <Icon size="lg" color="warning">⚠️</Icon>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// ALL COMBINATIONS
// ----------------------------------------------------------------------------

export const AllCombinations: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg">
      {(['filled', 'outlined', 'ghost'] as const).map((variant) => (
        <Box key={variant}>
          <Typography variant="caption" style={{ marginBottom: '0.5rem', display: 'block' }}>
            {variant.toUpperCase()}
          </Typography>
          <Box display="flex" gap="sm" align="center">
            {(['primary', 'secondary', 'success', 'danger', 'warning', 'neutral', 'dark'] as const).map((color) => (
              <Icon key={color} variant={variant} color={color} size="md">
                <StarIcon />
              </Icon>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  ),
};

