import type { Meta, StoryObj } from '@storybook/react';
import { ContainerSection } from './ContainerSection';
import { Button } from '../../atoms/Button';
import { Typography } from '../../atoms/Typography';
import { Stack } from '../../atoms/Stack';

const meta: Meta<typeof ContainerSection> = {
  title: 'Organisms/ContainerSection',
  component: ContainerSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    spacing: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
    background: {
      control: 'select',
      options: ['none', 'subtle', 'primary', 'dark', 'secondary'],
    },
    containerWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContainerSection>;

// ============================================================================
// ICONS
// ============================================================================

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// ============================================================================
// DEFAULT
// ============================================================================

export const Default: Story = {
  args: {
    heading: {
      title: 'Container Section',
      subtitle: 'A simple section with a heading and button group',
    },
    buttonGroup: {
      variant: 'default',
      gap: 'sm',
      buttons: (
        <>
          <Button variant="primary">Primary Action</Button>
          <Button variant="secondary">Secondary</Button>
        </>
      ),
    },
  },
};

// ============================================================================
// NAVIGATION TABS
// ============================================================================

export const NavigationTabs: Story = {
  args: {
    buttonGroup: {
      variant: 'attached',
      buttons: (
        <>
          <Button variant="primary">All</Button>
          <Button variant="ghost">Popular</Button>
          <Button variant="ghost">Recent</Button>
          <Button variant="ghost">Favorites</Button>
        </>
      ),
    },
    spacing: 'md',
    background: 'subtle',
  },
};

// ============================================================================
// LOGO BAR
// ============================================================================

export const LogoBar: Story = {
  args: {
    heading: {
      title: 'Trusted by Industry Leaders',
      align: 'center',
    },
    buttonGroup: {
      variant: 'attached',
      buttons: (
        <>
          <Button variant="ghost">ACME</Button>
          <Button variant="ghost">GLOBEX</Button>
          <Button variant="ghost">STARK</Button>
          <Button variant="ghost">WAYNE</Button>
          <Button variant="ghost">UMBRELLA</Button>
        </>
      ),
    },
    spacing: 'md',
    background: 'subtle',
  },
};

// ============================================================================
// CTA SECTION
// ============================================================================

export const CTASection: Story = {
  args: {
    heading: {
      eyebrow: 'Get Started',
      title: 'Ready to Build Something Bold?',
      subtitle: 'Join thousands of developers creating beautiful interfaces.',
    },
    buttonGroup: {
      variant: 'default',
      gap: 'sm',
      buttons: (
        <>
          <Button variant="primary" size="lg" rightIcon={<ArrowRightIcon />}>
            Start Free Trial
          </Button>
          <Button variant="ghost" size="lg">
            Schedule Demo
          </Button>
        </>
      ),
    },
    spacing: 'xl',
    background: 'dark',
    align: 'center',
  },
};

// ============================================================================
// FILTER BAR
// ============================================================================

export const FilterBar: Story = {
  args: {
    buttonGroup: {
      variant: 'attached',
      buttons: (
        <>
          <Button variant="secondary" size="sm">All Items</Button>
          <Button variant="ghost" size="sm">Active</Button>
          <Button variant="ghost" size="sm">Pending</Button>
          <Button variant="ghost" size="sm">Completed</Button>
          <Button variant="ghost" size="sm">Archived</Button>
        </>
      ),
    },
    spacing: 'sm',
    align: 'left',
  },
};

// ============================================================================
// WITH CHILDREN
// ============================================================================

export const WithChildren: Story = {
  render: () => (
    <ContainerSection
      heading={{
        eyebrow: 'Categories',
        title: 'Browse by Category',
      }}
      buttonGroup={{
        variant: 'attached',
        buttons: (
          <>
            <Button variant="primary">Components</Button>
            <Button variant="ghost">Templates</Button>
            <Button variant="ghost">Plugins</Button>
            <Button variant="ghost">Resources</Button>
          </>
        ),
      }}
      spacing="lg"
      background="subtle"
    >
      <Stack direction="column" gap="md" style={{ marginTop: '2rem' }}>
        <Typography variant="body" tone="muted">
          Select a category above to filter the results below.
        </Typography>
      </Stack>
    </ContainerSection>
  ),
};

// ============================================================================
// VERTICAL BUTTONS
// ============================================================================

export const VerticalButtons: Story = {
  args: {
    heading: {
      title: 'Quick Actions',
    },
    buttonGroup: {
      variant: 'attached',
      direction: 'column',
      fullWidth: true,
      buttons: (
        <>
          <Button variant="secondary">Create New Project</Button>
          <Button variant="secondary">Import from GitHub</Button>
          <Button variant="secondary">Browse Templates</Button>
          <Button variant="secondary">View Documentation</Button>
        </>
      ),
    },
    spacing: 'lg',
    containerWidth: 'sm',
    align: 'center',
  },
};

// ============================================================================
// PRICING TOGGLE
// ============================================================================

export const PricingToggle: Story = {
  args: {
    heading: {
      eyebrow: 'Pricing',
      title: 'Simple, Transparent Pricing',
      subtitle: 'Choose the plan that works for you.',
    },
    buttonGroup: {
      variant: 'attached',
      buttons: (
        <>
          <Button variant="primary">Monthly</Button>
          <Button variant="ghost">Yearly (Save 20%)</Button>
        </>
      ),
    },
    spacing: 'lg',
    background: 'subtle',
    align: 'center',
  },
};

// ============================================================================
// ALIGNMENTS
// ============================================================================

export const Alignments: Story = {
  render: () => (
    <Stack direction="column" gap="none">
      <ContainerSection
        heading={{ title: 'Left Aligned' }}
        buttonGroup={{
          buttons: (
            <>
              <Button variant="secondary" size="sm">One</Button>
              <Button variant="secondary" size="sm">Two</Button>
              <Button variant="secondary" size="sm">Three</Button>
            </>
          ),
        }}
        align="left"
        spacing="md"
        background="subtle"
      />
      <ContainerSection
        heading={{ title: 'Center Aligned' }}
        buttonGroup={{
          buttons: (
            <>
              <Button variant="secondary" size="sm">One</Button>
              <Button variant="secondary" size="sm">Two</Button>
              <Button variant="secondary" size="sm">Three</Button>
            </>
          ),
        }}
        align="center"
        spacing="md"
      />
      <ContainerSection
        heading={{ title: 'Right Aligned' }}
        buttonGroup={{
          buttons: (
            <>
              <Button variant="secondary" size="sm">One</Button>
              <Button variant="secondary" size="sm">Two</Button>
              <Button variant="secondary" size="sm">Three</Button>
            </>
          ),
        }}
        align="right"
        spacing="md"
        background="subtle"
      />
    </Stack>
  ),
};

