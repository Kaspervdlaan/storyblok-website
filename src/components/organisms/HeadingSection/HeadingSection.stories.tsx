import type { Meta, StoryObj } from '@storybook/react';
import { HeadingSection } from './HeadingSection';
import { Button } from '../../atoms/Button';
import { Box } from '../../atoms/Box';
import { IconCard } from '../../molecules/IconCard';

const meta: Meta<typeof HeadingSection> = {
  title: 'Organisms/HeadingSection',
  component: HeadingSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    spacing: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    background: {
      control: 'select',
      options: ['none', 'subtle', 'dark', 'primary', 'secondary'],
    },
    maxWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeadingSection>;

// Icons
const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const ZapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

// ----------------------------------------------------------------------------
// DEFAULT
// ----------------------------------------------------------------------------

export const Default: Story = {
  args: {
    eyebrow: 'Welcome',
    title: 'Build something amazing',
    subtitle: 'Create beautiful, accessible interfaces with our comprehensive design system. Everything you need to ship faster.',
    size: 'lg',
    align: 'center',
    spacing: 'lg',
    actions: (
      <>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
        <Button variant="ghost" size="lg">
          Learn More
        </Button>
      </>
    ),
  },
};

// ----------------------------------------------------------------------------
// HERO SECTION
// ----------------------------------------------------------------------------

export const HeroSection: Story = {
  render: () => (
    <HeadingSection
      eyebrow="Introducing Vibe"
      title="Design Without Compromise"
      subtitle="A neobrutalist design system for teams who refuse to blend in. Bold colors, heavy borders, and unapologetic typography."
      size="xl"
      align="center"
      spacing="xl"
      background="dark"
      actions={
        <>
          <Button variant="primary" size="lg">
            Start Building
          </Button>
          <Button variant="ghost" size="lg" style={{ borderColor: '#e9d8a6', color: '#e9d8a6' }}>
            View Components
          </Button>
        </>
      }
    />
  ),
};

// ----------------------------------------------------------------------------
// PAGE HEADER
// ----------------------------------------------------------------------------

export const PageHeader: Story = {
  render: () => (
    <HeadingSection
      eyebrow="Documentation"
      title="Getting Started"
      subtitle="Learn how to install and configure the Vibe Design System in your React project."
      size="lg"
      align="left"
      spacing="md"
      maxWidth="xl"
    />
  ),
};

// ----------------------------------------------------------------------------
// BACKGROUNDS
// ----------------------------------------------------------------------------

export const Backgrounds: Story = {
  render: () => (
    <div>
      <HeadingSection
        title="No Background"
        subtitle="Clean and minimal, inherits parent background."
        background="none"
        spacing="md"
      />
      <HeadingSection
        title="Subtle Background"
        subtitle="Soft muted background for visual separation."
        background="subtle"
        spacing="md"
      />
      <HeadingSection
        title="Dark Background"
        subtitle="High contrast dark theme section."
        background="dark"
        spacing="md"
      />
      <HeadingSection
        title="Primary Background"
        subtitle="Bold primary color for maximum impact."
        background="primary"
        spacing="md"
      />
      <HeadingSection
        title="Secondary Background"
        subtitle="Vibrant secondary color section."
        background="secondary"
        spacing="md"
      />
    </div>
  ),
};

// ----------------------------------------------------------------------------
// ALIGNMENTS
// ----------------------------------------------------------------------------

export const Alignments: Story = {
  render: () => (
    <div>
      <HeadingSection
        eyebrow="Left Aligned"
        title="Default Alignment"
        subtitle="Content flows naturally from left to right."
        align="left"
        spacing="md"
        background="subtle"
        actions={<Button variant="primary">Action</Button>}
      />
      <HeadingSection
        eyebrow="Center Aligned"
        title="Centered Content"
        subtitle="Great for hero sections and call-to-action areas."
        align="center"
        spacing="md"
        actions={<Button variant="primary">Action</Button>}
      />
      <HeadingSection
        eyebrow="Right Aligned"
        title="Right Alignment"
        subtitle="Useful for specific layout requirements."
        align="right"
        spacing="md"
        background="subtle"
        actions={<Button variant="primary">Action</Button>}
      />
    </div>
  ),
};

// ----------------------------------------------------------------------------
// WITH CHILDREN CONTENT
// ----------------------------------------------------------------------------

export const WithChildrenContent: Story = {
  render: () => (
    <HeadingSection
      eyebrow="Features"
      title="Everything you need"
      subtitle="Our design system comes packed with components to help you build better products faster."
      size="lg"
      align="center"
      spacing="lg"
      maxWidth="xl"
    >
      <Box
        display="grid"
        gap="lg"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          width: '100%',
          marginTop: '2rem',
        }}
      >
        <IconCard
          icon={<RocketIcon />}
          title="Fast Performance"
          description="Optimized for speed with minimal bundle size."
          iconColor="primary"
          centered
        />
        <IconCard
          icon={<ShieldIcon />}
          title="Accessible"
          description="Built with WCAG guidelines from the ground up."
          iconColor="secondary"
          centered
        />
        <IconCard
          icon={<ZapIcon />}
          title="Developer First"
          description="TypeScript support and great DX out of the box."
          iconColor="success"
          centered
        />
      </Box>
    </HeadingSection>
  ),
};

// ----------------------------------------------------------------------------
// CTA SECTION
// ----------------------------------------------------------------------------

export const CTASection: Story = {
  render: () => (
    <HeadingSection
      title="Ready to get started?"
      subtitle="Join thousands of developers building with Vibe Design System."
      size="lg"
      align="center"
      spacing="lg"
      background="primary"
      actions={
        <>
          <Button variant="ghost" size="lg" style={{ borderColor: '#001219', color: '#001219' }}>
            View Pricing
          </Button>
          <Button variant="secondary" size="lg">
            Start Free Trial
          </Button>
        </>
      }
    />
  ),
};

// ----------------------------------------------------------------------------
// SECTION DIVIDER
// ----------------------------------------------------------------------------

export const SectionDivider: Story = {
  render: () => (
    <HeadingSection
      eyebrow="Step 2"
      title="Configure Your Theme"
      subtitle="Customize colors, typography, and spacing to match your brand."
      size="md"
      align="left"
      spacing="md"
      maxWidth="lg"
    />
  ),
};

// ----------------------------------------------------------------------------
// COMPACT
// ----------------------------------------------------------------------------

export const Compact: Story = {
  args: {
    title: 'Quick Overview',
    subtitle: 'A compact section for less prominent areas.',
    size: 'sm',
    align: 'center',
    spacing: 'sm',
    background: 'subtle',
  },
};

// ----------------------------------------------------------------------------
// FULL PAGE LAYOUT
// ----------------------------------------------------------------------------

export const FullPageLayout: Story = {
  render: () => (
    <div>
      <HeadingSection
        eyebrow="Welcome to Vibe"
        title="Build Bold Interfaces"
        subtitle="A neobrutalist design system that refuses to blend in."
        size="xl"
        align="center"
        spacing="xl"
        background="dark"
        actions={
          <>
            <Button variant="primary" size="lg">Get Started</Button>
            <Button variant="ghost" size="lg" style={{ borderColor: '#e9d8a6', color: '#e9d8a6' }}>
              Learn More
            </Button>
          </>
        }
      />
      
      <HeadingSection
        eyebrow="Features"
        title="Why Choose Vibe?"
        subtitle="Everything you need to build modern web applications."
        size="lg"
        align="center"
        spacing="lg"
      >
        <Box
          display="grid"
          gap="lg"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            width: '100%',
            marginTop: '2rem',
          }}
        >
          <IconCard icon={<RocketIcon />} title="Fast" description="Optimized for performance." iconColor="primary" centered />
          <IconCard icon={<ShieldIcon />} title="Secure" description="Built with best practices." iconColor="secondary" centered />
          <IconCard icon={<ZapIcon />} title="Modern" description="Latest React patterns." iconColor="success" centered />
        </Box>
      </HeadingSection>
      
      <HeadingSection
        title="Start Building Today"
        subtitle="Join the neobrutalist revolution."
        size="lg"
        align="center"
        spacing="lg"
        background="primary"
        actions={<Button variant="secondary" size="lg">Get Started Free</Button>}
      />
    </div>
  ),
};

