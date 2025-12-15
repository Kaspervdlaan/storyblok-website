import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

// Atoms
import { Box } from '../components/atoms/Box';
import { Button } from '../components/atoms/Button';
import { Typography } from '../components/atoms/Typography';
import { Icon } from '../components/atoms/Icon';
import { Media } from '../components/atoms/Media';
import { Input } from '../components/atoms/Input';
import { Divider } from '../components/atoms/Divider';
import { Container } from '../components/atoms/Container';
import { Section } from '../components/atoms/Section';
import { Wysiwyg } from '../components/atoms/Wysiwyg';

// Molecules
import { Card } from '../components/molecules/Card';
import { IconCard } from '../components/molecules/IconCard';
import { Heading } from '../components/molecules/Heading';
import { Quote } from '../components/molecules/Quote';

// Organisms
import { HeadingSection } from '../components/organisms/HeadingSection';
import { MediaSection } from '../components/organisms/MediaSection';

const meta: Meta = {
  title: 'Preview/Website',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

// ============================================================================
// ICONS
// ============================================================================

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

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const VerifiedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

// Sample images
const heroImage = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80';
const featureImage1 = 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80';
const featureImage2 = 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80';
const avatar1 = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80';
const avatar2 = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80';
const avatar3 = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80';
const sampleVideo = 'https://www.w3schools.com/html/mov_bbb.mp4';

// ============================================================================
// NAVIGATION COMPONENT
// ============================================================================

const Navigation = () => (
  <Box
    as="nav"
    padding="md"
    background="surface"
    border="default"
    style={{ borderLeft: 'none', borderRight: 'none', borderTop: 'none' }}
  >
    <Container maxWidth="xl">
      <Box display="flex" align="center" justify="between">
        <Box display="flex" align="center" gap="sm">
          <Icon size="sm" color="primary" variant="filled">
            <ZapIcon />
          </Icon>
          <Typography variant="h3" weight="bold">VIBE</Typography>
        </Box>
        
        <Box display="flex" align="center" gap="lg" className="desktop-nav" style={{ display: 'none' }}>
          <Typography variant="bodySm" weight="medium" style={{ cursor: 'pointer' }}>Features</Typography>
          <Typography variant="bodySm" weight="medium" style={{ cursor: 'pointer' }}>Pricing</Typography>
          <Typography variant="bodySm" weight="medium" style={{ cursor: 'pointer' }}>Docs</Typography>
          <Typography variant="bodySm" weight="medium" style={{ cursor: 'pointer' }}>Blog</Typography>
        </Box>
        
        <Box display="flex" align="center" gap="sm">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button variant="primary" size="sm">Get Started</Button>
        </Box>
      </Box>
    </Container>
  </Box>
);

// ============================================================================
// FOOTER COMPONENT
// ============================================================================

const Footer = () => (
  <Box as="footer" paddingY="xl" background="dark">
    <Container maxWidth="xl">
      <Box
        display="grid"
        gap="xl"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
      >
        <Box display="flex" direction="column" gap="md">
          <Box display="flex" align="center" gap="sm">
            <Icon size="sm" color="primary" variant="filled">
              <ZapIcon />
            </Icon>
            <Typography variant="h3" weight="bold" style={{ color: '#e9d8a6' }}>VIBE</Typography>
          </Box>
          <Typography variant="bodySm" style={{ color: '#8a8477', maxWidth: '280px' }}>
            A neobrutalist design system for teams who refuse to blend in.
          </Typography>
        </Box>
        
        <Box display="flex" direction="column" gap="sm">
          <Typography variant="caption" style={{ color: '#e9d8a6' }}>PRODUCT</Typography>
          <Typography variant="bodySm" style={{ color: '#8a8477', cursor: 'pointer' }}>Features</Typography>
          <Typography variant="bodySm" style={{ color: '#8a8477', cursor: 'pointer' }}>Pricing</Typography>
          <Typography variant="bodySm" style={{ color: '#8a8477', cursor: 'pointer' }}>Changelog</Typography>
          <Typography variant="bodySm" style={{ color: '#8a8477', cursor: 'pointer' }}>Roadmap</Typography>
        </Box>
        
        <Box display="flex" direction="column" gap="sm">
          <Typography variant="caption" style={{ color: '#e9d8a6' }}>RESOURCES</Typography>
          <Typography variant="bodySm" style={{ color: '#8a8477', cursor: 'pointer' }}>Documentation</Typography>
          <Typography variant="bodySm" style={{ color: '#8a8477', cursor: 'pointer' }}>Components</Typography>
          <Typography variant="bodySm" style={{ color: '#8a8477', cursor: 'pointer' }}>Examples</Typography>
          <Typography variant="bodySm" style={{ color: '#8a8477', cursor: 'pointer' }}>Blog</Typography>
        </Box>
        
        <Box display="flex" direction="column" gap="sm">
          <Typography variant="caption" style={{ color: '#e9d8a6' }}>COMPANY</Typography>
          <Typography variant="bodySm" style={{ color: '#8a8477', cursor: 'pointer' }}>About</Typography>
          <Typography variant="bodySm" style={{ color: '#8a8477', cursor: 'pointer' }}>Careers</Typography>
          <Typography variant="bodySm" style={{ color: '#8a8477', cursor: 'pointer' }}>Contact</Typography>
          <Typography variant="bodySm" style={{ color: '#8a8477', cursor: 'pointer' }}>Legal</Typography>
        </Box>
      </Box>
      
      <Divider spacing="lg" color="muted" />
      
      <Box display="flex" justify="between" align="center" style={{ flexWrap: 'wrap', gap: '1rem' }}>
        <Typography variant="caption" style={{ color: '#5c5a52' }}>
          © 2024 Vibe Design System. All rights reserved.
        </Typography>
        <Box display="flex" gap="md">
          <Typography variant="caption" style={{ color: '#5c5a52', cursor: 'pointer' }}>Privacy</Typography>
          <Typography variant="caption" style={{ color: '#5c5a52', cursor: 'pointer' }}>Terms</Typography>
        </Box>
      </Box>
    </Container>
  </Box>
);

// ============================================================================
// FULL LANDING PAGE - Uses ALL components
// ============================================================================

export const LandingPage: Story = {
  render: () => (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      {/* Navigation - Uses: Box, Container, Icon, Typography, Button */}
      <Navigation />
      
      {/* Hero Section - Uses: HeadingSection (organism), Button */}
      <HeadingSection
        eyebrow="Introducing Vibe Design System"
        title="Design Without Compromise"
        subtitle="A neobrutalist component library for React. Bold colors, heavy borders, and unapologetic typography for teams who refuse to blend in."
        size="xl"
        align="center"
        spacing="xl"
        background="dark"
        actions={
          <>
            <Button variant="primary" size="lg" rightIcon={<ArrowRightIcon />}>
              Get Started Free
            </Button>
            <Button variant="ghost" size="lg" style={{ borderColor: '#e9d8a6', color: '#e9d8a6' }}>
              View Components
            </Button>
          </>
        }
      />
      
      {/* Trusted By Section - Uses: Section, Container, Typography, Box */}
      <Section spacing="md" background="subtle">
        <Container maxWidth="lg">
          <Typography variant="caption" align="center" tone="muted" style={{ display: 'block', marginBottom: '1.5rem' }}>
            TRUSTED BY TEAMS AT
          </Typography>
          <Box display="flex" justify="center" gap="xl" align="center" style={{ flexWrap: 'wrap', opacity: 0.5 }}>
            {['ACME', 'GLOBEX', 'STARK', 'WAYNE', 'UMBRELLA'].map((company) => (
              <Typography key={company} variant="h3" weight="bold">{company}</Typography>
            ))}
          </Box>
        </Container>
      </Section>
      
      {/* Features Grid - Uses: HeadingSection, IconCard (molecule), Box */}
      <HeadingSection
        eyebrow="Features"
        title="Everything You Need"
        subtitle="A comprehensive toolkit designed to help you ship beautiful, accessible interfaces faster than ever."
        size="lg"
        align="center"
        spacing="lg"
      >
        <Box
          display="grid"
          gap="lg"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            width: '100%',
            marginTop: '2rem',
          }}
        >
          <IconCard
            icon={<RocketIcon />}
            title="Blazing Fast"
            description="Optimized for performance with minimal bundle size. Tree-shakeable exports mean you only ship what you use."
            iconColor="primary"
            variant="default"
          />
          <IconCard
            icon={<ShieldIcon />}
            title="Accessible"
            description="Built with WCAG 2.1 guidelines from the ground up. Keyboard navigation and screen reader support included."
            iconColor="secondary"
            variant="default"
          />
          <IconCard
            icon={<CodeIcon />}
            title="Developer First"
            description="Full TypeScript support, comprehensive documentation, and a delightful developer experience."
            iconColor="success"
            variant="default"
          />
          <IconCard
            icon={<GlobeIcon />}
            title="Production Ready"
            description="Battle-tested in production by teams of all sizes. Reliable, stable, and continuously improved."
            iconColor="primary"
            variant="default"
          />
          <IconCard
            icon={<HeartIcon />}
            title="Community Driven"
            description="Open source with an active community. Regular updates, responsive maintainers, and great support."
            iconColor="danger"
            variant="default"
          />
          <IconCard
            icon={<ZapIcon />}
            title="Customizable"
            description="Flexible theming system with SCSS tokens. Adapt every aspect to match your brand perfectly."
            iconColor="neutral"
            variant="default"
          />
        </Box>
      </HeadingSection>
      
      {/* Media Section - Left - Uses: MediaSection (organism), Button */}
      <MediaSection
        media={{
          type: 'image',
          src: featureImage1,
          alt: 'Design tokens visualization',
        }}
        eyebrow="Design Tokens"
        title="Consistent by Design"
        description="Our comprehensive token system ensures every component speaks the same visual language. Colors, typography, spacing, and more—all carefully crafted and easy to customize."
        layout="media-left"
        spacing="lg"
        background="subtle"
        actions={
          <Button variant="primary" rightIcon={<ArrowRightIcon />}>
            Explore Tokens
          </Button>
        }
      />
      
      {/* Media Section - Right with Video - Uses: MediaSection, Media (video), Button */}
      <MediaSection
        media={{
          type: 'video',
          src: sampleVideo,
          alt: 'Component demo video',
          autoPlay: true,
          loop: true,
          controls: false,
        }}
        eyebrow="Component Library"
        title="Build Faster"
        description="From atoms to organisms, our Atomic Design methodology ensures components are reusable, composable, and maintainable. Spend less time building UI, more time building features."
        layout="media-right"
        spacing="lg"
        background="none"
        actions={
          <>
            <Button variant="secondary" rightIcon={<ArrowRightIcon />}>
              Browse Components
            </Button>
            <Button variant="ghost" leftIcon={<PlayIcon />}>
              Watch Demo
            </Button>
          </>
        }
      />
      
      {/* Testimonials with Quote Component - Uses: Section, Container, Heading (molecule), Quote (molecule), Box */}
      <Section spacing="lg" background="subtle">
        <Container maxWidth="lg">
          <Heading
            eyebrow="Testimonials"
            title="Loved by Developers"
            subtitle="See what teams are saying about Vibe Design System."
            size="lg"
            align="center"
          />
          <Box
            display="grid"
            gap="lg"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              marginTop: '3rem',
            }}
          >
            <Quote
              quote="Vibe's neobrutalist aesthetic perfectly captures our brand. The component quality is exceptional."
              author="Sarah Chen"
              role="Design Lead, Acme Corp"
              avatar={avatar1}
              authorIcon={<VerifiedIcon />}
              variant="elevated"
            />
            <Quote
              quote="Finally, a design system that isn't afraid to be bold. Our team's productivity has doubled."
              author="Marcus Johnson"
              role="Frontend Engineer, Globex"
              avatar={avatar2}
              authorIcon={<VerifiedIcon />}
              variant="elevated"
            />
            <Quote
              quote="The TypeScript support and documentation are top-notch. Integration was a breeze."
              author="Elena Rodriguez"
              role="Tech Lead, Stark Industries"
              avatar={avatar3}
              authorIcon={<VerifiedIcon />}
              variant="elevated"
            />
          </Box>
        </Container>
      </Section>

      {/* Featured Quote - Large - Uses: Section, Container, Quote (molecule) */}
      <Section spacing="lg" background="secondary">
        <Container maxWidth="md">
          <Quote
            quote="Vibe Design System has fundamentally changed how we approach product design. It's not just a component library—it's a philosophy."
            author="Alex Thompson"
            role="VP of Product, Fortune 500"
            avatar={avatar1}
            authorIcon={<StarIcon />}
            variant="minimal"
            size="lg"
            layout="vertical"
          />
        </Container>
      </Section>
      
      {/* Pricing with Card - Uses: Section, Container, Heading, Card (molecule), Box, Typography, Divider, Icon, Button */}
      <Section spacing="lg">
        <Container maxWidth="lg">
          <Heading
            eyebrow="Pricing"
            title="Simple, Transparent Pricing"
            subtitle="Start free, upgrade when you need to."
            size="lg"
            align="center"
          />
          <Box
            display="grid"
            gap="lg"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              marginTop: '3rem',
              maxWidth: '900px',
              margin: '3rem auto 0',
            }}
          >
            {/* Free Tier */}
            <Card variant="outlined" padding="lg">
              <Card.Body>
                <Typography variant="caption">FREE</Typography>
                <Typography variant="display" style={{ fontSize: '3rem', margin: '0.5rem 0' }}>$0</Typography>
                <Typography variant="bodySm" tone="muted">Perfect for side projects</Typography>
                <Divider spacing="md" />
                <Box display="flex" direction="column" gap="sm">
                  {['All components', 'Community support', 'Basic documentation', 'MIT License'].map((feature) => (
                    <Box key={feature} display="flex" align="center" gap="sm">
                      <Icon size="xs" color="success" variant="ghost"><CheckIcon /></Icon>
                      <Typography variant="bodySm">{feature}</Typography>
                    </Box>
                  ))}
                </Box>
              </Card.Body>
              <Card.Footer style={{ borderTop: 'none' }}>
                <Button variant="ghost" fullWidth>Get Started</Button>
              </Card.Footer>
            </Card>
            
            {/* Pro Tier */}
            <Card variant="elevated" padding="lg" style={{ border: '3px solid #ee9b00' }}>
              <Card.Body>
                <Box display="flex" justify="between" align="center">
                  <Typography variant="caption">PRO</Typography>
                  <Box padding="xs" paddingX="sm" background="primary" radius="sm">
                    <Typography variant="caption" weight="bold">POPULAR</Typography>
                  </Box>
                </Box>
                <Typography variant="display" style={{ fontSize: '3rem', margin: '0.5rem 0' }}>$29</Typography>
                <Typography variant="bodySm" tone="muted">Per month, billed annually</Typography>
                <Divider spacing="md" />
                <Box display="flex" direction="column" gap="sm">
                  {['Everything in Free', 'Premium components', 'Priority support', 'Figma files', 'Private Slack'].map((feature) => (
                    <Box key={feature} display="flex" align="center" gap="sm">
                      <Icon size="xs" color="success" variant="ghost"><CheckIcon /></Icon>
                      <Typography variant="bodySm">{feature}</Typography>
                    </Box>
                  ))}
                </Box>
              </Card.Body>
              <Card.Footer style={{ borderTop: 'none' }}>
                <Button variant="primary" fullWidth>Start Free Trial</Button>
              </Card.Footer>
            </Card>
            
            {/* Enterprise Tier */}
            <Card variant="outlined" padding="lg">
              <Card.Body>
                <Typography variant="caption">ENTERPRISE</Typography>
                <Typography variant="display" style={{ fontSize: '3rem', margin: '0.5rem 0' }}>Custom</Typography>
                <Typography variant="bodySm" tone="muted">For large organizations</Typography>
                <Divider spacing="md" />
                <Box display="flex" direction="column" gap="sm">
                  {['Everything in Pro', 'Custom components', 'Dedicated support', 'SLA guarantee', 'On-premise option'].map((feature) => (
                    <Box key={feature} display="flex" align="center" gap="sm">
                      <Icon size="xs" color="success" variant="ghost"><CheckIcon /></Icon>
                      <Typography variant="bodySm">{feature}</Typography>
                    </Box>
                  ))}
                </Box>
              </Card.Body>
              <Card.Footer style={{ borderTop: 'none' }}>
                <Button variant="ghost" fullWidth>Contact Sales</Button>
              </Card.Footer>
            </Card>
          </Box>
        </Container>
      </Section>
      
      {/* Newsletter CTA - Uses: HeadingSection, Box, Input, Button */}
      <HeadingSection
        title="Stay in the Loop"
        subtitle="Get the latest updates, tips, and resources delivered to your inbox."
        size="md"
        align="center"
        spacing="lg"
        background="primary"
      >
        <Box
          display="flex"
          gap="sm"
          align="end"
          style={{ maxWidth: '500px', width: '100%', marginTop: '1rem' }}
        >
          <Input
            placeholder="Enter your email"
            type="email"
            leftIcon={<MailIcon />}
            style={{ flex: 1 }}
          />
          <Button variant="secondary" size="md">Subscribe</Button>
        </Box>
      </HeadingSection>
      
      {/* Final CTA - Uses: HeadingSection, Button */}
      <HeadingSection
        eyebrow="Ready to Start?"
        title="Build Something Bold"
        subtitle="Join thousands of developers creating beautiful interfaces with Vibe."
        size="xl"
        align="center"
        spacing="xl"
        background="dark"
        actions={
          <>
            <Button variant="primary" size="lg" rightIcon={<ArrowRightIcon />}>
              Get Started Free
            </Button>
            <Button variant="ghost" size="lg" style={{ borderColor: '#e9d8a6', color: '#e9d8a6' }}>
              Schedule Demo
            </Button>
          </>
        }
      />
      
      {/* Footer - Uses: Box, Container, Icon, Typography, Divider */}
      <Footer />
    </div>
  ),
};

// ============================================================================
// DASHBOARD PREVIEW
// ============================================================================

export const DashboardPage: Story = {
  render: () => (
    <div style={{ minHeight: '100vh', background: '#f7f4ed' }}>
      {/* Header - Uses: Box, Container, Icon, Typography, Input, Button */}
      <Box
        padding="md"
        background="surface"
        border="default"
        style={{ borderLeft: 'none', borderRight: 'none', borderTop: 'none' }}
      >
        <Container maxWidth="xl">
          <Box display="flex" align="center" justify="between">
            <Box display="flex" align="center" gap="md">
              <Icon size="sm" color="primary" variant="filled">
                <ZapIcon />
              </Icon>
              <Typography variant="h3" weight="bold">Dashboard</Typography>
            </Box>
            <Box display="flex" align="center" gap="sm">
              <Input placeholder="Search..." size="sm" style={{ width: '200px' }} />
              <Button variant="ghost" size="sm">
                <Icon size="xs" color="neutral" variant="ghost"><MenuIcon /></Icon>
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      
      {/* Main Content */}
      <Container maxWidth="xl" padding="lg">
        <Box paddingY="lg">
          {/* Welcome - Uses: Heading (molecule) */}
          <Heading
            title="Welcome back, Alex"
            subtitle="Here's what's happening with your projects today."
            size="md"
            align="left"
          />
          
          {/* Stats Grid - Uses: Box, Card (molecule), Typography */}
          <Box
            display="grid"
            gap="md"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginTop: '2rem' }}
          >
            {[
              { label: 'Total Revenue', value: '$45,231', change: '+20.1%', color: 'primary' },
              { label: 'Subscriptions', value: '2,350', change: '+12.5%', color: 'secondary' },
              { label: 'Active Users', value: '12,234', change: '+8.2%', color: 'success' },
              { label: 'Bounce Rate', value: '24.5%', change: '-4.1%', color: 'danger' },
            ].map((stat) => (
              <Card key={stat.label} variant="elevated" padding="md">
                <Card.Body>
                  <Typography variant="caption" tone="muted">{stat.label}</Typography>
                  <Typography variant="h2" style={{ marginTop: '0.5rem' }}>{stat.value}</Typography>
                  <Typography
                    variant="caption"
                    style={{ color: stat.change.startsWith('+') ? '#0a9396' : '#ae2012' }}
                  >
                    {stat.change} from last month
                  </Typography>
                </Card.Body>
              </Card>
            ))}
          </Box>
          
          {/* Content Grid */}
          <Box
            display="grid"
            gap="lg"
            style={{ gridTemplateColumns: '2fr 1fr', marginTop: '2rem' }}
          >
            {/* Recent Activity - Uses: Card, Box, Typography, Divider, Media */}
            <Card variant="elevated" padding="lg">
              <Card.Header>
                <Box display="flex" justify="between" align="center">
                  <Typography variant="h3">Recent Activity</Typography>
                  <Button variant="ghost" size="sm">View All</Button>
                </Box>
              </Card.Header>
              <Card.Body>
                <Box display="flex" direction="column" gap="md">
                  {[
                    { user: 'Sarah Chen', action: 'created a new project', time: '2 min ago', avatar: avatar1 },
                    { user: 'Marcus J.', action: 'updated the dashboard', time: '15 min ago', avatar: avatar2 },
                    { user: 'Elena R.', action: 'deployed to production', time: '1 hour ago', avatar: avatar3 },
                    { user: 'Alex Kim', action: 'merged pull request #42', time: '2 hours ago', avatar: avatar1 },
                  ].map((activity, i) => (
                    <React.Fragment key={i}>
                      <Box display="flex" align="center" gap="md">
                        <Media
                          type="image"
                          src={activity.avatar}
                          alt={activity.user}
                          aspectRatio="square"
                          radius="full"
                          style={{ width: '36px', height: '36px' }}
                        />
                        <Box style={{ flex: 1 }}>
                          <Typography variant="bodySm">
                            <strong>{activity.user}</strong> {activity.action}
                          </Typography>
                          <Typography variant="caption" tone="muted">{activity.time}</Typography>
                        </Box>
                      </Box>
                      {i < 3 && <Divider spacing="none" color="muted" />}
                    </React.Fragment>
                  ))}
                </Box>
              </Card.Body>
            </Card>
            
            {/* Quick Actions - Uses: Box, Card, Typography, Button, Icon */}
            <Box display="flex" direction="column" gap="md">
              <Card variant="elevated" padding="md">
                <Card.Body>
                  <Typography variant="h3" style={{ marginBottom: '1rem' }}>Quick Actions</Typography>
                  <Box display="flex" direction="column" gap="sm">
                    <Button variant="primary" fullWidth leftIcon={<RocketIcon />}>
                      New Project
                    </Button>
                    <Button variant="secondary" fullWidth leftIcon={<CodeIcon />}>
                      Deploy
                    </Button>
                    <Button variant="ghost" fullWidth leftIcon={<GlobeIcon />}>
                      View Site
                    </Button>
                  </Box>
                </Card.Body>
              </Card>
              
              <Card variant="outlined" padding="md" style={{ background: '#ee9b00' }}>
                <Card.Body>
                  <Typography variant="caption" weight="bold">PRO TIP</Typography>
                  <Typography variant="bodySm" style={{ marginTop: '0.5rem' }}>
                    Use keyboard shortcuts to navigate faster. Press <code style={{ background: '#001219', color: '#e9d8a6', padding: '2px 6px', borderRadius: '4px' }}>?</code> to see all shortcuts.
                  </Typography>
                </Card.Body>
              </Card>

              {/* Recent Feedback - Uses: Quote (molecule) */}
              <Quote
                quote="The new dashboard is amazing! Everything I need is right here."
                author="Team Member"
                authorIcon={<StarIcon />}
                variant="default"
                size="sm"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  ),
};

// ============================================================================
// BLOG POST PREVIEW
// ============================================================================

export const BlogPostPage: Story = {
  render: () => (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      {/* Navigation */}
      <Navigation />
      
      {/* Hero - Uses: Section, Container, Box, Typography, Media */}
      <Section spacing="lg">
        <Container maxWidth="md">
          <Box display="flex" direction="column" gap="md" align="center">
            <Typography variant="caption" style={{ color: '#ee9b00' }}>DESIGN SYSTEMS</Typography>
            <Typography variant="display" align="center" style={{ fontSize: '3rem' }}>
              The Art of Neobrutalist Design
            </Typography>
            <Typography variant="body" tone="muted" align="center" style={{ maxWidth: '600px' }}>
              How bold aesthetics and unapologetic typography are reshaping modern web design.
            </Typography>
            <Box display="flex" align="center" gap="md" style={{ marginTop: '1rem' }}>
              <Media
                type="image"
                src={avatar1}
                alt="Sarah Chen"
                aspectRatio="square"
                radius="full"
                style={{ width: '48px', height: '48px' }}
              />
              <Box>
                <Typography variant="bodySm" weight="bold">Sarah Chen</Typography>
                <Typography variant="caption" tone="muted">Dec 15, 2024 · 8 min read</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Section>
      
      {/* Featured Image - Uses: Container, Media */}
      <Container maxWidth="lg" padding="md">
        <Media
          type="image"
          src={heroImage}
          alt="Abstract design"
          aspectRatio="wide"
          radius="lg"
        />
      </Container>
      
      {/* Article Content - Uses: Section, Container, Box, Typography, Wysiwyg */}
      <Section spacing="lg">
        <Container maxWidth="md">
          <Box display="flex" direction="column" gap="lg">
            {/* Using Wysiwyg for rich content */}
            <Wysiwyg html={`
              <p>In the ever-evolving landscape of web design, a bold new aesthetic has emerged that challenges the polished, minimalist conventions of the past decade. Neobrutalism—with its heavy borders, offset shadows, and vibrant color palettes—is making a statement that resonates with brands seeking to stand out in an increasingly homogeneous digital world.</p>
              
              <h2>The Origins</h2>
              <p>The roots of neobrutalism can be traced back to the Brutalist architecture movement of the 1950s, which celebrated raw concrete and bold geometric forms. In web design, this translates to thick borders, stark contrasts, and an intentional "rawness" that feels refreshingly authentic.</p>
            `} />
            
            {/* Key Takeaway Box */}
            <Box
              padding="lg"
              style={{
                background: '#ee9b00',
                border: '4px solid #001219',
                borderRadius: '0.6rem',
              }}
            >
              <Typography variant="h3" style={{ marginBottom: '0.5rem' }}>Key Takeaway</Typography>
              <Typography variant="body">
                Neobrutalism isn't about breaking rules—it's about making intentional choices that prioritize personality over polish.
              </Typography>
            </Box>

            {/* More Wysiwyg content */}
            <Wysiwyg html={`
              <h2>Core Principles</h2>
              <p>Several key principles define the neobrutalist aesthetic:</p>
              <ul>
                <li><strong>Heavy borders:</strong> Thick, often black outlines that define elements clearly</li>
                <li><strong>Offset shadows:</strong> Hard-edged shadows that create depth without blur</li>
                <li><strong>Bold typography:</strong> Monospace and sans-serif fonts used unapologetically</li>
                <li><strong>Vibrant colors:</strong> High-contrast palettes that demand attention</li>
              </ul>
              
              <h2>Implementation</h2>
              <p>When implementing neobrutalist design, consider using design systems like <strong>Vibe</strong> that provide pre-built components following these principles:</p>
              
              <pre><code>// Example usage
import { Button, Card } from 'vibe-design-system';

function App() {
  return (
    &lt;Card variant="elevated"&gt;
      &lt;Button variant="primary"&gt;
        Get Started
      &lt;/Button&gt;
    &lt;/Card&gt;
  );
}</code></pre>
            `} />
            
            {/* Author Quote - Uses: Quote (molecule) */}
            <Quote
              quote="The best designs are the ones that make people feel something. Neobrutalism does exactly that—it demands attention and creates emotion."
              author="Sarah Chen"
              role="Author of this article"
              avatar={avatar1}
              authorIcon={<VerifiedIcon />}
              variant="minimal"
              layout="horizontal"
            />
            
            <Divider spacing="lg" />
            
            {/* Article Footer - Uses: Box, Button, Icon, Typography */}
            <Box display="flex" justify="between" align="center">
              <Box display="flex" gap="sm">
                <Button variant="ghost" size="sm" leftIcon={<HeartIcon />}>234</Button>
                <Button variant="ghost" size="sm">Share</Button>
              </Box>
              <Typography variant="caption" tone="muted">
                Tagged: Design, UI/UX, Trends
              </Typography>
            </Box>
          </Box>
        </Container>
      </Section>
      
      {/* Related Articles - Uses: Section, Container, Heading, Box, Card, Media, Typography */}
      <Section spacing="lg" background="subtle">
        <Container maxWidth="lg">
          <Heading
            title="Related Articles"
            subtitle="Continue exploring design system topics"
            size="md"
            align="left"
          />
          <Box
            display="grid"
            gap="lg"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginTop: '2rem' }}
          >
            {[
              { title: 'Building Accessible Components', category: 'ACCESSIBILITY', image: featureImage1 },
              { title: 'The Power of Design Tokens', category: 'DESIGN SYSTEMS', image: featureImage2 },
              { title: 'React Best Practices 2024', category: 'DEVELOPMENT', image: heroImage },
            ].map((article, i) => (
              <Card key={i} variant="elevated" style={{ overflow: 'hidden' }}>
                <Media
                  type="image"
                  src={article.image}
                  alt={article.title}
                  aspectRatio="video"
                />
                <Card.Body>
                  <Box display="flex" direction="column" gap="sm" padding="md">
                    <Typography variant="caption" style={{ color: '#ee9b00' }}>{article.category}</Typography>
                    <Typography variant="h3">{article.title}</Typography>
                    <Button variant="ghost" size="sm" rightIcon={<ArrowRightIcon />}>
                      Read More
                    </Button>
                  </Box>
                </Card.Body>
              </Card>
            ))}
          </Box>
        </Container>
      </Section>
      
      {/* Footer */}
      <Footer />
    </div>
  ),
};
