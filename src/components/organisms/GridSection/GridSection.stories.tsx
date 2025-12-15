import type { Meta, StoryObj } from '@storybook/react';
import { GridSection } from './GridSection';
import { Card } from '../../molecules/Card';
import { IconCard } from '../../molecules/IconCard';
import { Box } from '../../atoms/Box';
import { Typography } from '../../atoms/Typography';
import { Button } from '../../atoms/Button';
import { Media } from '../../atoms/Media';

const meta: Meta<typeof GridSection> = {
  title: 'Organisms/GridSection',
  component: GridSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
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
type Story = StoryObj<typeof GridSection>;

// ============================================================================
// ICONS
// ============================================================================

const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
  </svg>
);

const ZapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

// ============================================================================
// PLACEHOLDER
// ============================================================================

const PlaceholderCard = ({ label }: { label: string }) => (
  <Box 
    padding="lg" 
    background="muted" 
    border="default" 
    radius="md"
    display="flex"
    align="center"
    justify="center"
    height="120px"
  >
    <Typography variant="body" weight="bold">{label}</Typography>
  </Box>
);

// ============================================================================
// DEFAULT
// ============================================================================

export const Default: Story = {
  args: {
    heading: {
      title: 'Grid Section',
      subtitle: 'A flexible grid layout with configurable columns',
    },
    columns: 3,
    gap: 'md',
    children: (
      <>
        <PlaceholderCard label="Item 1" />
        <PlaceholderCard label="Item 2" />
        <PlaceholderCard label="Item 3" />
      </>
    ),
  },
};

// ============================================================================
// COLUMN VARIANTS
// ============================================================================

export const OneColumn: Story = {
  args: {
    heading: {
      title: 'Single Column',
      subtitle: 'Full-width content layout',
    },
    columns: 1,
    containerWidth: 'md',
    children: (
      <>
        <PlaceholderCard label="Full Width Item 1" />
        <PlaceholderCard label="Full Width Item 2" />
      </>
    ),
  },
};

export const TwoColumns: Story = {
  args: {
    heading: {
      title: 'Two Columns',
      subtitle: 'Side-by-side layout',
    },
    columns: 2,
    children: (
      <>
        <PlaceholderCard label="Left" />
        <PlaceholderCard label="Right" />
      </>
    ),
  },
};

export const ThreeColumns: Story = {
  args: {
    heading: {
      title: 'Three Columns',
      subtitle: 'Classic grid layout',
    },
    columns: 3,
    children: (
      <>
        <PlaceholderCard label="1" />
        <PlaceholderCard label="2" />
        <PlaceholderCard label="3" />
      </>
    ),
  },
};

export const FourColumns: Story = {
  args: {
    heading: {
      title: 'Four Columns',
      subtitle: 'Compact grid layout',
    },
    columns: 4,
    children: (
      <>
        <PlaceholderCard label="1" />
        <PlaceholderCard label="2" />
        <PlaceholderCard label="3" />
        <PlaceholderCard label="4" />
      </>
    ),
  },
};

export const FiveColumns: Story = {
  args: {
    heading: {
      title: 'Five Columns',
    },
    columns: 5,
    children: (
      <>
        <PlaceholderCard label="1" />
        <PlaceholderCard label="2" />
        <PlaceholderCard label="3" />
        <PlaceholderCard label="4" />
        <PlaceholderCard label="5" />
      </>
    ),
  },
};

export const SixColumns: Story = {
  args: {
    heading: {
      title: 'Six Columns',
    },
    columns: 6,
    children: (
      <>
        <PlaceholderCard label="1" />
        <PlaceholderCard label="2" />
        <PlaceholderCard label="3" />
        <PlaceholderCard label="4" />
        <PlaceholderCard label="5" />
        <PlaceholderCard label="6" />
      </>
    ),
  },
};

// ============================================================================
// FEATURE GRID
// ============================================================================

export const FeatureGrid: Story = {
  render: () => (
    <GridSection
      heading={{
        eyebrow: 'Features',
        title: 'Everything you need',
        subtitle: 'Our platform comes packed with powerful features to help you succeed.',
        align: 'center',
      }}
      columns={3}
      gap="lg"
      spacing="lg"
      background="subtle"
    >
      <IconCard
        icon={<RocketIcon />}
        title="Lightning Fast"
        description="Optimized for speed and performance out of the box."
        variant="outlined"
      />
      <IconCard
        icon={<ShieldIcon />}
        title="Secure by Default"
        description="Enterprise-grade security with encryption at rest."
        variant="outlined"
      />
      <IconCard
        icon={<ZapIcon />}
        title="Easy Integration"
        description="Connect with your favorite tools in minutes."
        variant="outlined"
      />
      <IconCard
        icon={<StarIcon />}
        title="Premium Support"
        description="24/7 support from our dedicated team."
        variant="outlined"
      />
      <IconCard
        icon={<HeartIcon />}
        title="Developer Friendly"
        description="Clean APIs and comprehensive documentation."
        variant="outlined"
      />
      <IconCard
        icon={<GlobeIcon />}
        title="Global Scale"
        description="Deploy to multiple regions worldwide."
        variant="outlined"
      />
    </GridSection>
  ),
};

// ============================================================================
// BLOG CARDS
// ============================================================================

export const BlogGrid: Story = {
  render: () => (
    <GridSection
      heading={{
        eyebrow: 'Blog',
        title: 'Latest Articles',
        subtitle: 'Insights and updates from our team.',
      }}
      columns={3}
      gap="lg"
      spacing="lg"
    >
      <Card variant="elevated">
        <Card.Header>
          <Media
            type="image"
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop"
            alt="Code on screen"
            aspectRatio="video"
          />
        </Card.Header>
        <Card.Body>
          <Typography variant="caption" tone="muted">Development</Typography>
          <Typography variant="h3">Building Scalable React Applications</Typography>
          <Typography variant="bodySm" tone="muted">
            Learn best practices for building maintainable React apps.
          </Typography>
        </Card.Body>
        <Card.Footer>
          <Button variant="ghost" size="sm">Read More →</Button>
        </Card.Footer>
      </Card>

      <Card variant="elevated">
        <Card.Header>
          <Media
            type="image"
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
            alt="Analytics dashboard"
            aspectRatio="video"
          />
        </Card.Header>
        <Card.Body>
          <Typography variant="caption" tone="muted">Design</Typography>
          <Typography variant="h3">Creating Effective Design Systems</Typography>
          <Typography variant="bodySm" tone="muted">
            How to build and maintain a consistent design language.
          </Typography>
        </Card.Body>
        <Card.Footer>
          <Button variant="ghost" size="sm">Read More →</Button>
        </Card.Footer>
      </Card>

      <Card variant="elevated">
        <Card.Header>
          <Media
            type="image"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop"
            alt="Team collaboration"
            aspectRatio="video"
          />
        </Card.Header>
        <Card.Body>
          <Typography variant="caption" tone="muted">Process</Typography>
          <Typography variant="h3">Agile Development in 2024</Typography>
          <Typography variant="bodySm" tone="muted">
            Modern approaches to agile methodology for teams.
          </Typography>
        </Card.Body>
        <Card.Footer>
          <Button variant="ghost" size="sm">Read More →</Button>
        </Card.Footer>
      </Card>
    </GridSection>
  ),
};

// ============================================================================
// STATS SECTION
// ============================================================================

export const StatsGrid: Story = {
  render: () => (
    <GridSection
      heading={{
        title: 'Trusted by thousands',
        align: 'center',
      }}
      columns={4}
      gap="lg"
      spacing="lg"
      background="dark"
    >
      <Box display="flex" direction="column" align="center" gap="xs">
        <Typography variant="display" weight="black">10K+</Typography>
        <Typography variant="body" tone="muted">Active Users</Typography>
      </Box>
      <Box display="flex" direction="column" align="center" gap="xs">
        <Typography variant="display" weight="black">99.9%</Typography>
        <Typography variant="body" tone="muted">Uptime</Typography>
      </Box>
      <Box display="flex" direction="column" align="center" gap="xs">
        <Typography variant="display" weight="black">500+</Typography>
        <Typography variant="body" tone="muted">Integrations</Typography>
      </Box>
      <Box display="flex" direction="column" align="center" gap="xs">
        <Typography variant="display" weight="black">24/7</Typography>
        <Typography variant="body" tone="muted">Support</Typography>
      </Box>
    </GridSection>
  ),
};

// ============================================================================
// TEAM SECTION
// ============================================================================

export const TeamGrid: Story = {
  render: () => (
    <GridSection
      heading={{
        eyebrow: 'Our Team',
        title: 'Meet the People Behind Vibe',
        subtitle: 'A passionate team dedicated to building great products.',
        align: 'center',
      }}
      columns={4}
      gap="lg"
      spacing="lg"
    >
      {[
        { name: 'Alex Chen', role: 'CEO & Founder', img: 'https://i.pravatar.cc/200?img=1' },
        { name: 'Sarah Miller', role: 'Head of Design', img: 'https://i.pravatar.cc/200?img=5' },
        { name: 'James Wilson', role: 'Lead Engineer', img: 'https://i.pravatar.cc/200?img=3' },
        { name: 'Emma Davis', role: 'Product Manager', img: 'https://i.pravatar.cc/200?img=9' },
      ].map((person) => (
        <Box key={person.name} display="flex" direction="column" align="center" gap="md">
          <Media
            type="image"
            src={person.img}
            alt={person.name}
            aspectRatio="square"
            radius="full"
            style={{ width: '150px', height: '150px' }}
          />
          <Box display="flex" direction="column" align="center" gap="xs">
            <Typography variant="h3">{person.name}</Typography>
            <Typography variant="bodySm" tone="muted">{person.role}</Typography>
          </Box>
        </Box>
      ))}
    </GridSection>
  ),
};

// ============================================================================
// PRICING
// ============================================================================

export const PricingGrid: Story = {
  render: () => (
    <GridSection
      heading={{
        eyebrow: 'Pricing',
        title: 'Simple, Transparent Pricing',
        subtitle: 'Choose the plan that works for you.',
        align: 'center',
      }}
      columns={3}
      gap="lg"
      spacing="lg"
      background="subtle"
    >
      <Card variant="outlined">
        <Card.Body>
          <Box display="flex" direction="column" gap="md" align="center">
            <Typography variant="h3">Starter</Typography>
            <Box display="flex" align="baseline" gap="xs">
              <Typography variant="display" weight="black">$9</Typography>
              <Typography variant="bodySm" tone="muted">/month</Typography>
            </Box>
            <Box as="ul" display="flex" direction="column" gap="sm" style={{ listStyle: 'none', padding: 0 }}>
              <li><Typography variant="bodySm">✓ 5 projects</Typography></li>
              <li><Typography variant="bodySm">✓ Basic analytics</Typography></li>
              <li><Typography variant="bodySm">✓ Email support</Typography></li>
            </Box>
            <Button variant="secondary" fullWidth>Get Started</Button>
          </Box>
        </Card.Body>
      </Card>

      <Card variant="elevated">
        <Card.Body>
          <Box display="flex" direction="column" gap="md" align="center">
            <Typography variant="caption">MOST POPULAR</Typography>
            <Typography variant="h3">Pro</Typography>
            <Box display="flex" align="baseline" gap="xs">
              <Typography variant="display" weight="black">$29</Typography>
              <Typography variant="bodySm" tone="muted">/month</Typography>
            </Box>
            <Box as="ul" display="flex" direction="column" gap="sm" style={{ listStyle: 'none', padding: 0 }}>
              <li><Typography variant="bodySm">✓ Unlimited projects</Typography></li>
              <li><Typography variant="bodySm">✓ Advanced analytics</Typography></li>
              <li><Typography variant="bodySm">✓ Priority support</Typography></li>
              <li><Typography variant="bodySm">✓ Custom integrations</Typography></li>
            </Box>
            <Button variant="primary" fullWidth>Get Started</Button>
          </Box>
        </Card.Body>
      </Card>

      <Card variant="outlined">
        <Card.Body>
          <Box display="flex" direction="column" gap="md" align="center">
            <Typography variant="h3">Enterprise</Typography>
            <Box display="flex" align="baseline" gap="xs">
              <Typography variant="display" weight="black">$99</Typography>
              <Typography variant="bodySm" tone="muted">/month</Typography>
            </Box>
            <Box as="ul" display="flex" direction="column" gap="sm" style={{ listStyle: 'none', padding: 0 }}>
              <li><Typography variant="bodySm">✓ Everything in Pro</Typography></li>
              <li><Typography variant="bodySm">✓ Dedicated support</Typography></li>
              <li><Typography variant="bodySm">✓ SLA guarantee</Typography></li>
              <li><Typography variant="bodySm">✓ Custom contracts</Typography></li>
            </Box>
            <Button variant="secondary" fullWidth>Contact Sales</Button>
          </Box>
        </Card.Body>
      </Card>
    </GridSection>
  ),
};

// ============================================================================
// LOGOS / PARTNERS
// ============================================================================

export const LogoGrid: Story = {
  render: () => (
    <GridSection
      heading={{
        title: 'Trusted by Industry Leaders',
        align: 'center',
      }}
      columns={6}
      gap="lg"
      spacing="md"
    >
      {['Acme', 'Globex', 'Initech', 'Hooli', 'Pied Piper', 'Aviato'].map((name) => (
        <Box
          key={name}
          display="flex"
          align="center"
          justify="center"
          padding="md"
          background="muted"
          radius="md"
          height="80px"
        >
          <Typography variant="h3" tone="muted">{name}</Typography>
        </Box>
      ))}
    </GridSection>
  ),
};

// ============================================================================
// WITHOUT HEADING
// ============================================================================

export const WithoutHeading: Story = {
  args: {
    columns: 3,
    gap: 'lg',
    spacing: 'lg',
    children: (
      <>
        <PlaceholderCard label="Item 1" />
        <PlaceholderCard label="Item 2" />
        <PlaceholderCard label="Item 3" />
      </>
    ),
  },
};

