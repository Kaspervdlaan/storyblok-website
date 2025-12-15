import type { Meta, StoryObj } from '@storybook/react';
import { IconCard } from './IconCard';

const meta: Meta<typeof IconCard> = {
  title: 'Molecules/IconCard',
  component: IconCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'filled'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    iconColor: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'neutral'],
    },
    centered: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconCard>;

// ----------------------------------------------------------------------------
// ICONS
// ----------------------------------------------------------------------------

const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const ZapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

// ----------------------------------------------------------------------------
// DEFAULT
// ----------------------------------------------------------------------------

export const Default: Story = {
  args: {
    icon: <RocketIcon />,
    title: 'Fast Performance',
    description: 'Lightning-fast load times and smooth interactions for the best user experience.',
    variant: 'default',
    size: 'md',
    iconColor: 'primary',
  },
};

// ----------------------------------------------------------------------------
// VARIANTS
// ----------------------------------------------------------------------------

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '400px' }}>
      <IconCard
        icon={<RocketIcon />}
        title="Default Variant"
        description="Elevated card with shadow and hover effect."
        variant="default"
        iconColor="primary"
      />
      <IconCard
        icon={<ShieldIcon />}
        title="Outlined Variant"
        description="Clean border without shadow, subtle appearance."
        variant="outlined"
        iconColor="secondary"
      />
      <IconCard
        icon={<ZapIcon />}
        title="Filled Variant"
        description="Muted background, no border or shadow."
        variant="filled"
        iconColor="success"
      />
    </div>
  ),
};

// ----------------------------------------------------------------------------
// SIZES
// ----------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '500px' }}>
      <IconCard
        icon={<StarIcon />}
        title="Small Card"
        description="Compact size for dense layouts."
        size="sm"
        iconColor="primary"
      />
      <IconCard
        icon={<StarIcon />}
        title="Medium Card"
        description="Default size, balanced proportions."
        size="md"
        iconColor="primary"
      />
      <IconCard
        icon={<StarIcon />}
        title="Large Card"
        description="Prominent size for hero sections and key features."
        size="lg"
        iconColor="primary"
      />
    </div>
  ),
};

// ----------------------------------------------------------------------------
// ICON COLORS
// ----------------------------------------------------------------------------

export const IconColors: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
      }}
    >
      <IconCard
        icon={<ZapIcon />}
        title="Primary"
        description="Main brand color for key features."
        iconColor="primary"
      />
      <IconCard
        icon={<GlobeIcon />}
        title="Secondary"
        description="Viridian teal for secondary actions."
        iconColor="secondary"
      />
      <IconCard
        icon={<ShieldIcon />}
        title="Success"
        description="Positive actions and confirmations."
        iconColor="success"
      />
      <IconCard
        icon={<HeartIcon />}
        title="Danger"
        description="Warnings and destructive actions."
        iconColor="danger"
      />
      <IconCard
        icon={<CodeIcon />}
        title="Neutral"
        description="Subtle, understated appearance."
        iconColor="neutral"
      />
    </div>
  ),
};

// ----------------------------------------------------------------------------
// CENTERED LAYOUT
// ----------------------------------------------------------------------------

export const Centered: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1.5rem',
      }}
    >
      <IconCard
        icon={<RocketIcon />}
        title="Launch Fast"
        description="Get your project off the ground in minutes."
        centered
        iconColor="primary"
      />
      <IconCard
        icon={<ShieldIcon />}
        title="Stay Secure"
        description="Enterprise-grade security built in."
        centered
        iconColor="secondary"
      />
      <IconCard
        icon={<ZapIcon />}
        title="Scale Easy"
        description="Grow without limits or complexity."
        centered
        iconColor="success"
      />
    </div>
  ),
};

// ----------------------------------------------------------------------------
// FEATURE GRID
// ----------------------------------------------------------------------------

export const FeatureGrid: Story = {
  render: () => (
    <div style={{ background: '#001219', padding: '3rem', margin: '-1rem' }}>
      <h2
        style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: '2.25rem',
          fontWeight: 700,
          color: '#e9d8a6',
          marginBottom: '2rem',
          textAlign: 'center',
        }}
      >
        WHY CHOOSE US
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <IconCard
          icon={<RocketIcon />}
          title="Blazing Fast"
          description="Optimized for performance with sub-second load times."
          iconColor="primary"
          centered
        />
        <IconCard
          icon={<ShieldIcon />}
          title="Secure by Default"
          description="Built with security best practices from day one."
          iconColor="secondary"
          centered
        />
        <IconCard
          icon={<CodeIcon />}
          title="Developer First"
          description="Clean APIs and comprehensive documentation."
          iconColor="success"
          centered
        />
        <IconCard
          icon={<GlobeIcon />}
          title="Global Scale"
          description="Deploy worldwide with edge computing."
          iconColor="primary"
          centered
        />
        <IconCard
          icon={<HeartIcon />}
          title="Community Driven"
          description="Open source with an active community."
          iconColor="danger"
          centered
        />
        <IconCard
          icon={<LockIcon />}
          title="Privacy Focused"
          description="Your data stays yours. Always."
          iconColor="neutral"
          centered
        />
      </div>
    </div>
  ),
};

// ----------------------------------------------------------------------------
// HORIZONTAL LIST
// ----------------------------------------------------------------------------

export const HorizontalList: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
      <IconCard
        icon={<RocketIcon />}
        title="Step 1: Design"
        description="Create your vision with our intuitive design tools."
        variant="outlined"
        size="sm"
        iconColor="primary"
      />
      <IconCard
        icon={<CodeIcon />}
        title="Step 2: Build"
        description="Transform designs into production-ready code."
        variant="outlined"
        size="sm"
        iconColor="secondary"
      />
      <IconCard
        icon={<ZapIcon />}
        title="Step 3: Launch"
        description="Deploy with confidence and scale effortlessly."
        variant="outlined"
        size="sm"
        iconColor="success"
      />
    </div>
  ),
};

// ----------------------------------------------------------------------------
// WITH EMOJI ICONS
// ----------------------------------------------------------------------------

export const WithEmoji: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.5rem',
      }}
    >
      <IconCard
        icon="🚀"
        title="Ship Faster"
        description="Accelerate your development workflow."
        iconColor="primary"
        centered
      />
      <IconCard
        icon="🎨"
        title="Design Better"
        description="Beautiful, consistent UI components."
        iconColor="secondary"
        centered
      />
      <IconCard
        icon="⚡"
        title="Perform Better"
        description="Optimized for speed and efficiency."
        iconColor="success"
        centered
      />
    </div>
  ),
};

