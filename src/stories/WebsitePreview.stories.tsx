import type { Meta, StoryObj } from '@storybook/react';

// Atoms
import { Box } from '../components/atoms/Box';
import { Stack } from '../components/atoms/Stack';
import { Button } from '../components/atoms/Button';
import { Typography } from '../components/atoms/Typography';
import { Icon } from '../components/atoms/Icon';
import { Media } from '../components/atoms/Media';

// Molecules
import { Card } from '../components/molecules/Card';
import { IconCard } from '../components/molecules/IconCard';
import { Quote } from '../components/molecules/Quote';
import { ButtonGroup } from '../components/molecules/ButtonGroup';

// Organisms
import { HeadingSection } from '../components/organisms/HeadingSection';
import { MediaSection } from '../components/organisms/MediaSection';
import { GridSection } from '../components/organisms/GridSection';
import { ContainerSection } from '../components/organisms/ContainerSection';

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

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const VerifiedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Sample images
const featureImage1 = 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80';
const featureImage2 = 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80';
const avatar1 = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80';
const avatar2 = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80';
const avatar3 = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80';
const sampleVideo = 'https://www.w3schools.com/html/mov_bbb.mp4';

// ============================================================================
// LANDING PAGE - Using only organisms
// ============================================================================

export const LandingPage: Story = {
  render: () => (
    <div>
      {/* Hero - HeadingSection */}
      <HeadingSection
        eyebrow="Introducing Vibe Design System"
        title="Design Without Compromise"
        subtitle="A neobrutalist component library for React. Bold colors, heavy borders, and unapologetic typography for teams who refuse to blend in."
        size="xl"
        align="center"
        spacing="xl"
        background="dark"
        actions={
          <ButtonGroup gap="sm">
            <Button variant="primary" size="lg" rightIcon={<ArrowRightIcon />}>
              Get Started Free
            </Button>
            <Button variant="ghost" size="lg" style={{ borderColor: '#e9d8a6', color: '#e9d8a6' }}>
              View Components
            </Button>
          </ButtonGroup>
        }
      />

      {/* Trusted By - GridSection */}
      <ContainerSection
        background="subtle"
        spacing="lg"
      >
        <ButtonGroup variant='attached'>
          {['ACME', 'GLOBEX', 'STARK', 'WAYNE', 'UMBRELLA'].map((company) => (
            <Button key={company}  variant="ghost">{company}</Button>
          ))}
        </ButtonGroup>
      </ContainerSection>

      {/* Features - GridSection with IconCards */}
      <GridSection
        heading={{
          eyebrow: 'Features',
          title: 'Everything You Need',
          subtitle: 'A comprehensive toolkit designed to help you ship beautiful, accessible interfaces faster than ever.',
          align: 'center',
        }}
        columns={2}
        gap="lg"
        spacing="lg"
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
      </GridSection>

      {/* Feature Highlight 1 - MediaSection */}
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

      {/* Feature Highlight 2 - MediaSection with Video */}
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
        actions={
          <Button variant="secondary" rightIcon={<ArrowRightIcon />}>
            Browse Components
          </Button>
        }
      />

      {/* Testimonials - GridSection with Quotes */}
      <GridSection
        heading={{
          eyebrow: 'Testimonials',
          title: 'Loved by Developers',
          subtitle: 'See what teams are saying about Vibe Design System.',
          align: 'center',
        }}
        columns={1}
        gap="lg"
        spacing="lg"
        background="subtle"
      >
        <Quote
          quote="Vibe's neobrutalist aesthetic perfectly captures our brand. The component quality is exceptional."
          author="Sarah Chen"
          role="Design Lead, Acme Corp"
          layout="horizontal"
          avatar={avatar1}
          authorIcon={<VerifiedIcon />}
          variant="minimal"
        />
      </GridSection>

      {/* Pricing - GridSection with Cards */}
      <GridSection
        heading={{
          eyebrow: 'Pricing',
          title: 'Simple, Transparent Pricing',
          subtitle: 'Start free, upgrade when you need to.',
          align: 'center',
        }}
        columns={3}
        gap="lg"
        spacing="lg"
        containerWidth="lg"
      >
        {/* Free Tier */}
        <Card variant="flat" padding="lg">
          <Card.Body>
            <Typography variant="caption">FREE</Typography>
            <Typography variant="display" style={{ fontSize: '3rem', margin: '0.5rem 0' }}>$0</Typography>
            <Typography variant="bodySm" tone="muted">Perfect for side projects</Typography>
            <Stack direction="column" gap="sm" style={{ marginTop: '1.5rem' }}>
              {['All components', 'Community support', 'MIT License'].map((feature) => (
                <Stack key={feature} direction="row" align="center" gap="sm">
                  <Icon size="xs" color="success" variant="ghost"><CheckIcon /></Icon>
                  <Typography variant="bodySm">{feature}</Typography>
                </Stack>
              ))}
            </Stack>
            <Button variant="ghost" fullWidth style={{ marginTop: '1.5rem' }}>Get Started</Button>
          </Card.Body>
        </Card>

        {/* Pro Tier */}
        <Card variant="elevated" padding="lg" style={{ border: '3px solid #ee9b00' }}>
          <Card.Body>
            <Stack direction="row" justify="between" align="center">
              <Typography variant="caption">PRO</Typography>
              <Box padding="xs" paddingX="sm" background="primary" radius="sm">
                <Typography variant="caption" weight="bold">POPULAR</Typography>
              </Box>
            </Stack>
            <Typography variant="display" style={{ fontSize: '3rem', margin: '0.5rem 0' }}>$29</Typography>
            <Typography variant="bodySm" tone="muted">Per month, billed annually</Typography>
            <Stack direction="column" gap="sm" style={{ marginTop: '1.5rem' }}>
              {['Everything in Free', 'Premium components', 'Priority support', 'Figma files'].map((feature) => (
                <Stack key={feature} direction="row" align="center" gap="sm">
                  <Icon size="xs" color="success" variant="ghost"><CheckIcon /></Icon>
                  <Typography variant="bodySm">{feature}</Typography>
                </Stack>
              ))}
            </Stack>
            <Button variant="primary" fullWidth style={{ marginTop: '1.5rem' }}>Start Free Trial</Button>
          </Card.Body>
        </Card>

        {/* Enterprise Tier */}
        <Card variant="outlined" padding="lg">
          <Card.Body>
            <Typography variant="caption">ENTERPRISE</Typography>
            <Typography variant="display" style={{ fontSize: '3rem', margin: '0.5rem 0' }}>Custom</Typography>
            <Typography variant="bodySm" tone="muted">For large organizations</Typography>
            <Stack direction="column" gap="sm" style={{ marginTop: '1.5rem' }}>
              {['Everything in Pro', 'Custom components', 'Dedicated support', 'SLA guarantee'].map((feature) => (
                <Stack key={feature} direction="row" align="center" gap="sm">
                  <Icon size="xs" color="success" variant="ghost"><CheckIcon /></Icon>
                  <Typography variant="bodySm">{feature}</Typography>
                </Stack>
              ))}
            </Stack>
            <Button variant="ghost" fullWidth style={{ marginTop: '1.5rem' }}>Contact Sales</Button>
          </Card.Body>
        </Card>
      </GridSection>

      {/* Stats - GridSection */}
      <GridSection
        heading={{
          title: 'Trusted by Thousands',
          align: 'center',
        }}
        columns={4}
        gap="lg"
        spacing="lg"
        background="subtle"
      >
        <Stack direction="column" align="center" gap="xs">
          <Typography variant="display" weight="bold">10K+</Typography>
          <Typography variant="body" tone="muted">Active Users</Typography>
        </Stack>
        <Stack direction="column" align="center" gap="xs">
          <Typography variant="display" weight="bold">99.9%</Typography>
          <Typography variant="body" tone="muted">Uptime</Typography>
        </Stack>
        <Stack direction="column" align="center" gap="xs">
          <Typography variant="display" weight="bold">500+</Typography>
          <Typography variant="body" tone="muted">Components</Typography>
        </Stack>
        <Stack direction="column" align="center" gap="xs">
          <Typography variant="display" weight="bold">24/7</Typography>
          <Typography variant="body" tone="muted">Support</Typography>
        </Stack>
      </GridSection>

      {/* Final CTA - HeadingSection */}
      <HeadingSection
        eyebrow="Ready to Start?"
        title="Build Something Bold"
        subtitle="Join thousands of developers creating beautiful interfaces with Vibe."
        size="xl"
        align="center"
        spacing="xl"
        background="primary"
        actions={
          <ButtonGroup gap="sm">
            <Button variant="secondary" size="lg" rightIcon={<ArrowRightIcon />}>
              Get Started Free
            </Button>
            <Button variant="ghost" size="lg">
              Schedule Demo
            </Button>
          </ButtonGroup>
        }
      />
    </div>
  ),
};

// ============================================================================
// PRODUCT PAGE
// ============================================================================

export const ProductPage: Story = {
  render: () => (
    <div>
      {/* Hero - MediaSection */}
      <MediaSection
        media={{
          type: 'image',
          src: featureImage2,
          alt: 'Product hero',
        }}
        eyebrow="New Release"
        title="The Ultimate Design System"
        description="Create stunning interfaces with our comprehensive component library. Built for speed, designed for beauty."
        layout="media-right"
        spacing="xl"
        background="subtle"
        actions={
          <ButtonGroup gap="sm">
            <Button variant="primary" size="lg" rightIcon={<ArrowRightIcon />}>
              Try it Free
            </Button>
            <Button variant="ghost" size="lg">
              Watch Demo
            </Button>
          </ButtonGroup>
        }
      />

      {/* Benefits - GridSection */}
      <GridSection
        heading={{
          eyebrow: 'Why Choose Us',
          title: 'Benefits That Matter',
          align: 'center',
        }}
        columns={2}
        gap="xl"
        spacing="lg"
      >
        <IconCard
          icon={<RocketIcon />}
          title="Ship 10x Faster"
          description="Pre-built components mean you can focus on building features, not reinventing the wheel. Get to market faster."
          iconColor="primary"
          variant="outlined"
        />
        <IconCard
          icon={<ShieldIcon />}
          title="Enterprise Security"
          description="Built with security best practices. Regular audits, dependency updates, and vulnerability scanning."
          iconColor="secondary"
          variant="outlined"
        />
        <IconCard
          icon={<CodeIcon />}
          title="Clean Codebase"
          description="Well-documented, typed, and tested. Your team will love working with our components."
          iconColor="success"
          variant="outlined"
        />
        <IconCard
          icon={<HeartIcon />}
          title="Dedicated Support"
          description="Our team is here to help. Get answers fast with priority support for Pro and Enterprise plans."
          iconColor="danger"
          variant="outlined"
        />
      </GridSection>

      {/* Feature Deep Dive - MediaSection */}
      <MediaSection
        media={{
          type: 'image',
          src: featureImage1,
          alt: 'Component showcase',
        }}
        eyebrow="Component Library"
        title="50+ Production-Ready Components"
        description="From simple buttons to complex data tables, we've got you covered. Every component is accessible, customizable, and thoroughly tested."
        layout="media-left"
        spacing="lg"
        background="subtle"
        actions={
          <Button variant="primary" rightIcon={<ArrowRightIcon />}>
            Browse Components
          </Button>
        }
      />

      {/* Testimonial - GridSection */}
      <GridSection
        columns={1}
        spacing="lg"
        background="subtle"
        containerWidth="md"
      >
        <Quote
          quote="Switching to Vibe cut our development time in half. The component quality is unmatched, and the documentation is fantastic."
          author="Sarah Chen"
          role="CTO, TechStartup Inc"
          avatar={avatar1}
          authorIcon={<VerifiedIcon />}
          variant="default"
          layout="horizontal"
          size="sm"
        />
      </GridSection>

      {/* CTA - HeadingSection */}
      <HeadingSection
        title="Start Building Today"
        subtitle="Free to use, forever. Upgrade when you need more."
        size="lg"
        align="center"
        spacing="xl"
        background="dark"
        actions={
          <Button variant="primary" size="lg" rightIcon={<ArrowRightIcon />}>
            Get Started Free
          </Button>
        }
      />
    </div>
  ),
};

// ============================================================================
// ABOUT PAGE
// ============================================================================

export const AboutPage: Story = {
  render: () => (
    <div>
      {/* Hero - HeadingSection */}
      <HeadingSection
        eyebrow="About Us"
        title="We Build Tools for Builders"
        subtitle="A passionate team dedicated to making design systems accessible to everyone."
        size="xl"
        align="center"
        spacing="xl"
        background="subtle"
      />

      {/* Mission - MediaSection */}
      <MediaSection
        media={{
          type: 'image',
          src: featureImage1,
          alt: 'Our mission',
        }}
        eyebrow="Our Mission"
        title="Democratizing Design"
        description="We believe every team deserves access to world-class design tools. Our mission is to remove the barriers between great ideas and beautiful products."
        layout="media-left"
        spacing="lg"
      />

      {/* Values - GridSection */}
      <GridSection
        heading={{
          eyebrow: 'Our Values',
          title: 'What We Stand For',
          align: 'center',
        }}
        columns={2}
        gap="lg"
        spacing="lg"
        background="subtle"
      >
        <IconCard
          icon={<HeartIcon />}
          title="User First"
          description="Every decision starts with our users. We build what you need, not what we think is cool."
          iconColor="danger"
          variant="default"
        />
        <IconCard
          icon={<ShieldIcon />}
          title="Quality Over Quantity"
          description="We'd rather ship 10 perfect components than 100 mediocre ones."
          iconColor="secondary"
          variant="default"
        />
        <Card variant="flat" padding="lg">
          <Card.Body>
            <Typography variant="h3">Open Source</Typography>
            <Typography variant="bodySm">We believe in the power of community. Our core library will always be free and open source.</Typography>
            <Button variant="ghost" fullWidth style={{ marginTop: '1.5rem' }}>View Source</Button>
          </Card.Body>
        </Card>
      </GridSection>

      {/* Team - GridSection */}
      <GridSection
        heading={{
          eyebrow: 'Our Team',
          title: 'Meet the People Behind Vibe',
          align: 'center',
        }}
        columns={4}
        gap="lg"
        spacing="lg"
      >
        {[
          { name: 'Alex Chen', role: 'CEO & Founder', img: avatar1 },
          { name: 'Sarah Miller', role: 'Head of Design', img: avatar2 },
          { name: 'James Wilson', role: 'Lead Engineer', img: avatar3 },
          { name: 'Emma Davis', role: 'Product Manager', img: avatar1 },
        ].map((person) => (
          <Stack key={person.name} direction="column" align="center" gap="md">
            <Box width="120px" height="120px" radius="full" overflow="hidden">
              <Media
                type="image"
                src={person.img}
                alt={person.name}
                aspectRatio="square"
              />
            </Box>
            <Stack direction="column" align="center" gap="xs">
              <Typography variant="h3">{person.name}</Typography>
              <Typography variant="bodySm" tone="muted">{person.role}</Typography>
            </Stack>
          </Stack>
        ))}
      </GridSection>

      {/* CTA - HeadingSection */}
      <HeadingSection
        title="Join Our Journey"
        subtitle="We're always looking for talented people to join our team."
        size="lg"
        align="center"
        spacing="xl"
        background="dark"
        actions={
          <Button variant="primary" size="lg" rightIcon={<ArrowRightIcon />}>
            View Open Positions
          </Button>
        }
      />
    </div>
  ),
};
