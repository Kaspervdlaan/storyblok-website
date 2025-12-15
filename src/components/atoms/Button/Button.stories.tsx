import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { Section } from '../Section';
import { Container } from '../Container';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    isLoading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ----------------------------------------------------------------------------
// ICONS
// ----------------------------------------------------------------------------

const ArrowRightIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="square"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const PlusIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="square"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const TrashIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="square"
  >
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

// ----------------------------------------------------------------------------
// DEFAULT
// ----------------------------------------------------------------------------

export const Default: Story = {
  args: {
    children: 'Click Me',
    variant: 'primary',
    size: 'md',
  },
};

// ----------------------------------------------------------------------------
// VARIANTS
// ----------------------------------------------------------------------------

export const Variants: Story = {
  render: () => (
    <Box display="flex" gap="md" style={{ flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// SIZES
// ----------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => (
    <Box display="flex" gap="md" align="center" style={{ flexWrap: 'wrap' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// FULL WIDTH
// ----------------------------------------------------------------------------

export const FullWidth: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="md" style={{ width: '300px' }}>
      <Button variant="primary" fullWidth>Full Width Primary</Button>
      <Button variant="secondary" fullWidth>Full Width Secondary</Button>
      <Button variant="ghost" fullWidth>Full Width Ghost</Button>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// LOADING
// ----------------------------------------------------------------------------

export const Loading: Story = {
  render: () => (
    <Box display="flex" gap="md" style={{ flexWrap: 'wrap' }}>
      <Button variant="primary" isLoading>
        Loading
      </Button>
      <Button variant="secondary" isLoading>
        Loading
      </Button>
      <Button variant="ghost" isLoading>
        Loading
      </Button>
      <Button variant="danger" isLoading>
        Loading
      </Button>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// DISABLED
// ----------------------------------------------------------------------------

export const Disabled: Story = {
  render: () => (
    <Box display="flex" gap="md" style={{ flexWrap: 'wrap' }}>
      <Button variant="primary" disabled>
        Disabled
      </Button>
      <Button variant="secondary" disabled>
        Disabled
      </Button>
      <Button variant="ghost" disabled>
        Disabled
      </Button>
      <Button variant="danger" disabled>
        Disabled
      </Button>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// WITH ICONS
// ----------------------------------------------------------------------------

export const WithIcons: Story = {
  render: () => (
    <Box display="flex" gap="md" style={{ flexWrap: 'wrap' }}>
      <Button variant="primary" leftIcon={<PlusIcon />}>
        Add Item
      </Button>
      <Button variant="secondary" rightIcon={<ArrowRightIcon />}>
        Continue
      </Button>
      <Button variant="danger" leftIcon={<TrashIcon />}>
        Delete
      </Button>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// ALL SIZES WITH ICONS
// ----------------------------------------------------------------------------

export const AllSizesWithIcons: Story = {
  render: () => (
    <Box display="flex" gap="md" align="center" style={{ flexWrap: 'wrap' }}>
      <Button size="sm" leftIcon={<PlusIcon />}>
        Small
      </Button>
      <Button size="md" leftIcon={<PlusIcon />}>
        Medium
      </Button>
      <Button size="lg" leftIcon={<PlusIcon />}>
        Large
      </Button>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// NEOBRUTALIST SHOWCASE
// ----------------------------------------------------------------------------

export const NeobrutalistShowcase: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <Section spacing="xl" background="dark">
      <Container maxWidth="lg">
        <Box display="flex" direction="column" gap="lg" align="center">
          <Typography variant="display" style={{ color: '#e9d8a6' }}>
            BOLD BUTTONS
          </Typography>
          <Typography variant="body" tone="muted" align="center" style={{ maxWidth: '500px', color: '#8a8477' }}>
            Neobrutalist buttons with heavy borders, offset shadows, and unapologetic presence.
          </Typography>
          <Box display="flex" gap="lg" style={{ flexWrap: 'wrap' }} justify="center">
            <Button variant="primary" size="lg" rightIcon={<ArrowRightIcon />}>
              Get Started
            </Button>
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
            <Button variant="ghost" size="lg" style={{ borderColor: '#e9d8a6', color: '#e9d8a6' }}>
              View Demo
            </Button>
          </Box>
        </Box>
      </Container>
    </Section>
  ),
};

// ----------------------------------------------------------------------------
// INTERACTIVE
// ----------------------------------------------------------------------------

export const Interactive: Story = {
  args: {
    children: 'Interactive Button',
    variant: 'primary',
    size: 'md',
  },
};

// ----------------------------------------------------------------------------
// ALL VARIANTS GRID
// ----------------------------------------------------------------------------

export const AllVariantsGrid: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <Section spacing="lg">
      <Container maxWidth="xl">
        <Box display="flex" direction="column" gap="xl">
          <Typography variant="h2">Button Variants & States</Typography>
          
          {/* Variants Row */}
          <Box display="flex" direction="column" gap="md">
            <Typography variant="caption">VARIANTS</Typography>
            <Box display="flex" gap="md" style={{ flexWrap: 'wrap' }}>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
            </Box>
          </Box>
          
          {/* Sizes Row */}
          <Box display="flex" direction="column" gap="md">
            <Typography variant="caption">SIZES</Typography>
            <Box display="flex" gap="md" align="center" style={{ flexWrap: 'wrap' }}>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </Box>
          </Box>
          
          {/* States Row */}
          <Box display="flex" direction="column" gap="md">
            <Typography variant="caption">STATES</Typography>
            <Box display="flex" gap="md" style={{ flexWrap: 'wrap' }}>
              <Button variant="primary">Default</Button>
              <Button variant="primary" isLoading>Loading</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </Box>
          </Box>
          
          {/* With Icons Row */}
          <Box display="flex" direction="column" gap="md">
            <Typography variant="caption">WITH ICONS</Typography>
            <Box display="flex" gap="md" style={{ flexWrap: 'wrap' }}>
              <Button leftIcon={<PlusIcon />}>Left Icon</Button>
              <Button rightIcon={<ArrowRightIcon />}>Right Icon</Button>
              <Button leftIcon={<PlusIcon />} rightIcon={<ArrowRightIcon />}>Both Icons</Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Section>
  ),
};
