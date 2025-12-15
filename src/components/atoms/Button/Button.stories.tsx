import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

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
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};

// ----------------------------------------------------------------------------
// SIZES
// ----------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

// ----------------------------------------------------------------------------
// LOADING
// ----------------------------------------------------------------------------

export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
    </div>
  ),
};

// ----------------------------------------------------------------------------
// DISABLED
// ----------------------------------------------------------------------------

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
    </div>
  ),
};

// ----------------------------------------------------------------------------
// WITH ICONS
// ----------------------------------------------------------------------------

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary" leftIcon={<PlusIcon />}>
        Add Item
      </Button>
      <Button variant="secondary" rightIcon={<ArrowRightIcon />}>
        Continue
      </Button>
      <Button variant="danger" leftIcon={<TrashIcon />}>
        Delete
      </Button>
    </div>
  ),
};

// ----------------------------------------------------------------------------
// ALL SIZES WITH ICONS
// ----------------------------------------------------------------------------

export const AllSizesWithIcons: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Button size="sm" leftIcon={<PlusIcon />}>
        Small
      </Button>
      <Button size="md" leftIcon={<PlusIcon />}>
        Medium
      </Button>
      <Button size="lg" leftIcon={<PlusIcon />}>
        Large
      </Button>
    </div>
  ),
};

// ----------------------------------------------------------------------------
// NEOBRUTALIST SHOWCASE
// ----------------------------------------------------------------------------

export const NeobrutalistShowcase: Story = {
  render: () => (
    <div
      style={{
        background: '#001219',
        padding: '3rem',
        display: 'flex',
        gap: '1.5rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <Button variant="primary" size="lg" rightIcon={<ArrowRightIcon />}>
        Get Started
      </Button>
      <Button variant="secondary" size="lg">
        Learn More
      </Button>
      <Button variant="ghost" size="lg" style={{ borderColor: '#e9d8a6', color: '#e9d8a6' }}>
        View Demo
      </Button>
    </div>
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

