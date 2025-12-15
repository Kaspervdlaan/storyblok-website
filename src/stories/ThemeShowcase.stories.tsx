import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

// Atoms
import { Box } from '../components/atoms/Box';
import { Button } from '../components/atoms/Button';
import { Typography } from '../components/atoms/Typography';
import { Icon } from '../components/atoms/Icon';
import { Input } from '../components/atoms/Input';
import { Divider } from '../components/atoms/Divider';
import { Container } from '../components/atoms/Container';
import { Section } from '../components/atoms/Section';

// Molecules
import { Card } from '../components/molecules/Card';
import { IconCard } from '../components/molecules/IconCard';
import { Heading } from '../components/molecules/Heading';
import { Quote } from '../components/molecules/Quote';

// Types
import type { ThemeName, ThemeMode } from '../components/providers/Theme';

const meta: Meta = {
  title: 'Theme/Showcase',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

// ============================================================================
// ICONS
// ============================================================================

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const ZapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

// ============================================================================
// THEME PROVIDER WRAPPER (for Storybook context)
// ============================================================================

interface ThemeWrapperProps {
  theme: ThemeName;
  mode: ThemeMode;
  children: React.ReactNode;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ theme, mode, children }) => {
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-mode', mode);
    return () => {
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.removeAttribute('data-mode');
    };
  }, [theme, mode]);

  return <>{children}</>;
};

// ============================================================================
// COMPONENT SHOWCASE
// ============================================================================

interface ShowcaseProps {
  themeName: string;
}

const ComponentShowcase: React.FC<ShowcaseProps> = ({ themeName }) => (
  <Box display="flex" direction="column" gap="xl" padding="lg">
    {/* Header */}
    <Box display="flex" justify="between" align="center">
      <Box display="flex" align="center" gap="sm">
        <Icon size="md" color="primary" variant="filled">
          <ZapIcon />
        </Icon>
        <Typography variant="h2" weight="bold">
          {themeName} Theme
        </Typography>
      </Box>
    </Box>

    <Divider />

    {/* Typography */}
    <Box display="flex" direction="column" gap="md">
      <Typography variant="caption">TYPOGRAPHY</Typography>
      <Typography variant="display">Display Heading</Typography>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="body">
        Body text - The quick brown fox jumps over the lazy dog. This demonstrates the primary body text styling for this theme.
      </Typography>
      <Typography variant="bodySm" tone="muted">
        Small body text with muted tone for secondary information.
      </Typography>
    </Box>

    <Divider />

    {/* Buttons */}
    <Box display="flex" direction="column" gap="md">
      <Typography variant="caption">BUTTONS</Typography>
      <Box display="flex" gap="md" style={{ flexWrap: 'wrap' }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
      </Box>
      <Box display="flex" gap="md" style={{ flexWrap: 'wrap' }}>
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
      </Box>
    </Box>

    <Divider />

    {/* Inputs */}
    <Box display="flex" direction="column" gap="md">
      <Typography variant="caption">INPUTS</Typography>
      <Box display="grid" gap="md" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        <Input label="Default Input" placeholder="Enter text..." />
        <Input label="With Icon" placeholder="Search..." leftIcon={<SearchIcon />} />
        <Input label="Error State" placeholder="Invalid input" error helperText="This field is required" />
        <Input label="Filled Variant" placeholder="Filled style" variant="filled" />
      </Box>
    </Box>

    <Divider />

    {/* Cards */}
    <Box display="flex" direction="column" gap="md">
      <Typography variant="caption">CARDS</Typography>
      <Box display="grid" gap="md" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        <Card variant="elevated" padding="md">
          <Card.Body>
            <Typography variant="h3">Elevated Card</Typography>
            <Typography variant="bodySm" tone="muted" style={{ marginTop: '0.5rem' }}>
              With shadow and hover effect
            </Typography>
          </Card.Body>
        </Card>
        <Card variant="outlined" padding="md">
          <Card.Body>
            <Typography variant="h3">Outlined Card</Typography>
            <Typography variant="bodySm" tone="muted" style={{ marginTop: '0.5rem' }}>
              Border only, no shadow
            </Typography>
          </Card.Body>
        </Card>
        <Card variant="flat" padding="md">
          <Card.Body>
            <Typography variant="h3">Flat Card</Typography>
            <Typography variant="bodySm" tone="muted" style={{ marginTop: '0.5rem' }}>
              Subtle background
            </Typography>
          </Card.Body>
        </Card>
      </Box>
    </Box>

    <Divider />

    {/* Icon Cards */}
    <Box display="flex" direction="column" gap="md">
      <Typography variant="caption">ICON CARDS</Typography>
      <Box display="grid" gap="md" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        <IconCard
          icon={<ZapIcon />}
          title="Performance"
          description="Optimized for speed and efficiency"
          iconColor="primary"
        />
        <IconCard
          icon={<ShieldIcon />}
          title="Security"
          description="Built with security in mind"
          iconColor="secondary"
        />
        <IconCard
          icon={<CodeIcon />}
          title="Developer"
          description="Great developer experience"
          iconColor="success"
        />
      </Box>
    </Box>

    <Divider />

    {/* Quote */}
    <Box display="flex" direction="column" gap="md">
      <Typography variant="caption">QUOTE</Typography>
      <Quote
        quote="This design system perfectly captures both bold and refined aesthetics, adapting seamlessly to any brand identity."
        author="Design Lead"
        role="Acme Corporation"
        avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
        variant="elevated"
      />
    </Box>
  </Box>
);

// ============================================================================
// SIDE BY SIDE COMPARISON
// ============================================================================

export const SideBySide: Story = {
  render: () => {
    return (
      <Box display="grid" style={{ gridTemplateColumns: '1fr 1fr', minHeight: '100vh' }}>
        {/* Neobrutalist Theme */}
        <ThemeWrapper theme="neobrutalist" mode="light">
          <Box style={{ background: 'var(--color-surface)', minHeight: '100%' }}>
            <ComponentShowcase themeName="Neobrutalist" />
          </Box>
        </ThemeWrapper>

        {/* Minimal Theme */}
        <ThemeWrapper theme="minimal" mode="light">
          <Box style={{ background: 'var(--color-surface)', minHeight: '100%' }}>
            <ComponentShowcase themeName="Minimal" />
          </Box>
        </ThemeWrapper>
      </Box>
    );
  },
};

// ============================================================================
// INTERACTIVE THEME SWITCHER
// ============================================================================

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<ThemeName>('neobrutalist');
  const [mode, setMode] = useState<ThemeMode>('light');

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-mode', mode);
  }, [theme, mode]);

  return (
    <Box style={{ minHeight: '100vh', background: 'var(--color-surface)' }}>
      {/* Theme Controls */}
      <Box
        padding="md"
        style={{
          position: 'sticky',
          top: 0,
          background: 'var(--color-surface)',
          borderBottom: 'var(--card-border-width, 1px) solid var(--color-border)',
          zIndex: 100,
        }}
      >
        <Container maxWidth="xl">
          <Box display="flex" justify="between" align="center">
            <Box display="flex" align="center" gap="sm">
              <Icon size="sm" color="primary" variant="filled">
                <ZapIcon />
              </Icon>
              <Typography variant="h3" weight="bold">Theme Showcase</Typography>
            </Box>
            <Box display="flex" gap="md" align="center">
              {/* Theme Toggle */}
              <Box display="flex" gap="sm">
                <Button
                  variant={theme === 'neobrutalist' ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => setTheme('neobrutalist')}
                >
                  Neobrutalist
                </Button>
                <Button
                  variant={theme === 'minimal' ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => setTheme('minimal')}
                >
                  Minimal
                </Button>
              </Box>
              <Divider orientation="vertical" style={{ height: '24px' }} />
              {/* Mode Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                leftIcon={mode === 'light' ? <SunIcon /> : <MoonIcon />}
              >
                {mode === 'light' ? 'Light' : 'Dark'}
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Content */}
      <Container maxWidth="xl">
        <ComponentShowcase themeName={theme === 'neobrutalist' ? 'Neobrutalist' : 'Minimal Modern'} />
      </Container>
    </Box>
  );
};

export const Interactive: Story = {
  render: () => <ThemeSwitcher />,
};

// ============================================================================
// NEOBRUTALIST ONLY
// ============================================================================

export const Neobrutalist: Story = {
  render: () => (
    <ThemeWrapper theme="neobrutalist" mode="light">
      <Box style={{ minHeight: '100vh', background: 'var(--color-surface)' }}>
        <Container maxWidth="xl">
          <ComponentShowcase themeName="Neobrutalist" />
        </Container>
      </Box>
    </ThemeWrapper>
  ),
};

// ============================================================================
// MINIMAL ONLY
// ============================================================================

export const Minimal: Story = {
  render: () => (
    <ThemeWrapper theme="minimal" mode="light">
      <Box style={{ minHeight: '100vh', background: 'var(--color-surface)' }}>
        <Container maxWidth="xl">
          <ComponentShowcase themeName="Minimal Modern" />
        </Container>
      </Box>
    </ThemeWrapper>
  ),
};

// ============================================================================
// DARK MODE SHOWCASE
// ============================================================================

export const DarkMode: Story = {
  render: () => (
    <Box display="grid" style={{ gridTemplateColumns: '1fr 1fr', minHeight: '100vh' }}>
      {/* Neobrutalist Dark */}
      <ThemeWrapper theme="neobrutalist" mode="dark">
        <Box style={{ background: 'var(--color-surface)', minHeight: '100%' }}>
          <ComponentShowcase themeName="Neobrutalist Dark" />
        </Box>
      </ThemeWrapper>

      {/* Minimal Dark */}
      <ThemeWrapper theme="minimal" mode="dark">
        <Box style={{ background: 'var(--color-surface)', minHeight: '100%' }}>
          <ComponentShowcase themeName="Minimal Dark" />
        </Box>
      </ThemeWrapper>
    </Box>
  ),
};

// ============================================================================
// FULL PAGE COMPARISON
// ============================================================================

const FullPageDemo: React.FC<{ themeName: ThemeName }> = ({ themeName }) => (
  <Box style={{ minHeight: '100vh', background: 'var(--color-surface)' }}>
    {/* Hero */}
    <Section spacing="xl" background="subtle">
      <Container maxWidth="lg">
        <Box display="flex" direction="column" align="center" gap="lg">
          <Heading
            eyebrow={themeName === 'neobrutalist' ? 'BOLD & UNAPOLOGETIC' : 'CLEAN & PROFESSIONAL'}
            title={themeName === 'neobrutalist' ? 'Design Without Limits' : 'Elegant Simplicity'}
            subtitle={
              themeName === 'neobrutalist'
                ? 'A neobrutalist design system with heavy borders, offset shadows, and vibrant colors.'
                : 'A minimal modern design system with refined typography and subtle aesthetics.'
            }
            size="lg"
            align="center"
          />
          <Box display="flex" gap="md">
            <Button variant="primary" size="lg">Get Started</Button>
            <Button variant="ghost" size="lg">Learn More</Button>
          </Box>
        </Box>
      </Container>
    </Section>

    {/* Features */}
    <Section spacing="lg">
      <Container maxWidth="lg">
        <Heading
          eyebrow="Features"
          title="Everything You Need"
          subtitle="A comprehensive toolkit for building beautiful interfaces."
          size="md"
          align="center"
        />
        <Box
          display="grid"
          gap="lg"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: '2rem' }}
        >
          <IconCard icon={<ZapIcon />} title="Fast" description="Optimized for performance" iconColor="primary" />
          <IconCard icon={<ShieldIcon />} title="Secure" description="Built with security in mind" iconColor="secondary" />
          <IconCard icon={<CodeIcon />} title="Developer Friendly" description="Great DX out of the box" iconColor="success" />
        </Box>
      </Container>
    </Section>

    {/* Testimonial */}
    <Section spacing="lg" background="subtle">
      <Container maxWidth="md">
        <Quote
          quote={
            themeName === 'neobrutalist'
              ? "This bold design system has transformed how we build products. It's unapologetically distinctive!"
              : "The refined aesthetics and attention to detail make this design system a joy to work with."
          }
          author="Design Director"
          role="Tech Company"
          avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
          variant="elevated"
          size="lg"
        />
      </Container>
    </Section>

    {/* Newsletter */}
    <Section spacing="lg">
      <Container maxWidth="sm">
        <Box display="flex" direction="column" align="center" gap="md">
          <Heading title="Stay Updated" subtitle="Get the latest news and updates." size="sm" align="center" />
          <Box display="flex" gap="sm" style={{ width: '100%' }}>
            <Input placeholder="Enter your email" leftIcon={<MailIcon />} style={{ flex: 1 }} />
            <Button variant="primary">Subscribe</Button>
          </Box>
        </Box>
      </Container>
    </Section>
  </Box>
);

export const FullPageComparison: Story = {
  render: () => (
    <Box display="grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
      <ThemeWrapper theme="neobrutalist" mode="light">
        <FullPageDemo themeName="neobrutalist" />
      </ThemeWrapper>
      <ThemeWrapper theme="minimal" mode="light">
        <FullPageDemo themeName="minimal" />
      </ThemeWrapper>
    </Box>
  ),
};

