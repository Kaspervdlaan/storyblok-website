import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Typography } from '../../atoms/Typography';
import { Button } from '../../atoms/Button';
import { Box } from '../../atoms/Box';
import { Section } from '../../atoms/Section';
import { Container } from '../../atoms/Container';
import { Divider } from '../../atoms/Divider';
import { Icon } from '../../atoms/Icon';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'flat'],
    },
    padding: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// Icons
const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// ----------------------------------------------------------------------------
// DEFAULT
// ----------------------------------------------------------------------------

export const Default: Story = {
  args: {
    variant: 'elevated',
    padding: 'md',
  },
  render: (args) => (
    <Card {...args}>
      <Card.Header>
        <Typography variant="h3">Card Title</Typography>
      </Card.Header>
      <Card.Body>
        <Typography variant="body">
          This is a basic card with header, body, and footer sections. Cards are
          versatile containers for grouping related content.
        </Typography>
      </Card.Body>
      <Card.Footer>
        <Button variant="ghost" size="sm">
          Cancel
        </Button>
        <Button variant="primary" size="sm">
          Confirm
        </Button>
      </Card.Footer>
    </Card>
  ),
};

// ----------------------------------------------------------------------------
// BASIC CARD
// ----------------------------------------------------------------------------

export const BasicCard: Story = {
  render: () => (
    <Card style={{ maxWidth: '400px' }}>
      <Card.Body>
        <Box display="flex" direction="column" gap="sm">
          <Typography variant="h3">Simple Card</Typography>
          <Typography variant="body">
            A card with just a body section. Perfect for simple content blocks.
          </Typography>
        </Box>
      </Card.Body>
    </Card>
  ),
};

// ----------------------------------------------------------------------------
// VARIANTS
// ----------------------------------------------------------------------------

export const Variants: Story = {
  render: () => (
    <Box
      display="grid"
      gap="lg"
      style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      }}
    >
      <Card variant="elevated">
        <Card.Header>
          <Typography variant="h3">Elevated</Typography>
        </Card.Header>
        <Card.Body>
          <Typography variant="body">
            Bold shadow for maximum visual impact. The signature neobrutalist
            look.
          </Typography>
        </Card.Body>
      </Card>

      <Card variant="outlined">
        <Card.Header>
          <Typography variant="h3">Outlined</Typography>
        </Card.Header>
        <Card.Body>
          <Typography variant="body">
            Clean border without shadow. Subtle but still maintains structure.
          </Typography>
        </Card.Body>
      </Card>

      <Card variant="flat">
        <Card.Header>
          <Typography variant="h3">Flat</Typography>
        </Card.Header>
        <Card.Body>
          <Typography variant="body">
            No border or shadow. Uses background color for definition.
          </Typography>
        </Card.Body>
      </Card>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// PADDING SIZES
// ----------------------------------------------------------------------------

export const PaddingSizes: Story = {
  render: () => (
    <Box display="flex" gap="lg" style={{ flexWrap: 'wrap' }}>
      <Card padding="sm" style={{ width: '200px' }}>
        <Card.Body>
          <Typography variant="bodySm">Small padding</Typography>
        </Card.Body>
      </Card>

      <Card padding="md" style={{ width: '200px' }}>
        <Card.Body>
          <Typography variant="bodySm">Medium padding</Typography>
        </Card.Body>
      </Card>

      <Card padding="lg" style={{ width: '200px' }}>
        <Card.Body>
          <Typography variant="bodySm">Large padding</Typography>
        </Card.Body>
      </Card>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// CARD WITH FOOTER ACTIONS
// ----------------------------------------------------------------------------

export const WithFooterActions: Story = {
  render: () => (
    <Card style={{ maxWidth: '400px' }}>
      <Card.Header>
        <Typography variant="h3">Confirm Action</Typography>
      </Card.Header>
      <Card.Body>
        <Typography variant="body">
          Are you sure you want to proceed? This action cannot be undone.
        </Typography>
      </Card.Body>
      <Card.Footer>
        <Button variant="ghost" size="sm">
          Cancel
        </Button>
        <Button variant="danger" size="sm">
          Delete
        </Button>
      </Card.Footer>
    </Card>
  ),
};

// ----------------------------------------------------------------------------
// PRODUCT CARD
// ----------------------------------------------------------------------------

export const ProductCard: Story = {
  render: () => (
    <Card variant="elevated" padding="lg" style={{ maxWidth: '320px' }}>
      <Box
        padding="xl"
        background="primary"
        display="flex"
        align="center"
        justify="center"
        style={{
          margin: '-1.5rem -1.5rem 0 -1.5rem',
          borderBottom: '3px solid #001219',
          borderRadius: '0.6rem 0.6rem 0 0',
          height: '180px',
        }}
      >
        <Typography variant="display" style={{ fontSize: '4rem' }}>
          🎨
        </Typography>
      </Box>
      <Card.Body style={{ paddingTop: '1.5rem' }}>
        <Box display="flex" direction="column" gap="xs">
          <Typography variant="caption" tone="muted">
            DESIGN TOOL
          </Typography>
          <Typography variant="h3">
            Vibe Design System
          </Typography>
          <Typography variant="bodySm" tone="muted">
            A neobrutalist component library for bold, unapologetic interfaces.
          </Typography>
          <Box display="flex" align="center" gap="md" style={{ marginTop: '0.5rem' }}>
            <Typography variant="h3">$0</Typography>
            <Typography variant="bodySm" tone="muted">
              Free forever
            </Typography>
          </Box>
        </Box>
      </Card.Body>
      <Card.Footer style={{ borderTop: 'none', paddingTop: 0 }}>
        <Button variant="primary" size="md" fullWidth>
          Get Started
        </Button>
      </Card.Footer>
    </Card>
  ),
};

// ----------------------------------------------------------------------------
// NOTIFICATION CARD
// ----------------------------------------------------------------------------

export const NotificationCard: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="md" style={{ maxWidth: '400px' }}>
      <Card
        variant="outlined"
        padding="sm"
        style={{ borderLeft: '6px solid #0a9396' }}
      >
        <Card.Body>
          <Box display="flex" direction="column" gap="xs">
            <Typography variant="caption" tone="success">
              SUCCESS
            </Typography>
            <Typography variant="bodySm">
              Your changes have been saved successfully.
            </Typography>
          </Box>
        </Card.Body>
      </Card>

      <Card
        variant="outlined"
        padding="sm"
        style={{ borderLeft: '6px solid #ae2012' }}
      >
        <Card.Body>
          <Box display="flex" direction="column" gap="xs">
            <Typography variant="caption" tone="danger">
              ERROR
            </Typography>
            <Typography variant="bodySm">
              Something went wrong. Please try again.
            </Typography>
          </Box>
        </Card.Body>
      </Card>

      <Card
        variant="outlined"
        padding="sm"
        style={{ borderLeft: '6px solid #bb3e03' }}
      >
        <Card.Body>
          <Box display="flex" direction="column" gap="xs">
            <Typography variant="caption" style={{ color: '#bb3e03' }}>
              WARNING
            </Typography>
            <Typography variant="bodySm">
              Your session will expire in 5 minutes.
            </Typography>
          </Box>
        </Card.Body>
      </Card>
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
    <Section spacing="xl" background="secondary">
      <Container maxWidth="lg">
        <Box
          display="grid"
          gap="lg"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          }}
        >
          <Card variant="elevated" padding="lg">
            <Card.Header>
              <Typography variant="h3">01</Typography>
            </Card.Header>
            <Card.Body>
              <Box display="flex" direction="column" gap="sm">
                <Typography variant="h2">BOLD</Typography>
                <Typography variant="bodySm">
                  Heavy borders and offset shadows create depth and dimension.
                </Typography>
              </Box>
            </Card.Body>
          </Card>

          <Card variant="elevated" padding="lg">
            <Card.Header>
              <Typography variant="h3">02</Typography>
            </Card.Header>
            <Card.Body>
              <Box display="flex" direction="column" gap="sm">
                <Typography variant="h2">LOUD</Typography>
                <Typography variant="bodySm">
                  Electric colors that demand attention and refuse to fade.
                </Typography>
              </Box>
            </Card.Body>
          </Card>

          <Card variant="elevated" padding="lg">
            <Card.Header>
              <Typography variant="h3">03</Typography>
            </Card.Header>
            <Card.Body>
              <Box display="flex" direction="column" gap="sm">
                <Typography variant="h2">RAW</Typography>
                <Typography variant="bodySm">
                  Unapologetic design that celebrates imperfection.
                </Typography>
              </Box>
            </Card.Body>
          </Card>
        </Box>
      </Container>
    </Section>
  ),
};

// ----------------------------------------------------------------------------
// PROFILE CARD
// ----------------------------------------------------------------------------

export const ProfileCard: Story = {
  render: () => (
    <Card variant="elevated" padding="lg" style={{ maxWidth: '320px' }}>
      <Card.Body>
        <Box display="flex" direction="column" align="center" gap="md">
          <Box
            display="flex"
            align="center"
            justify="center"
            background="secondary"
            border="default"
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              fontSize: '2rem',
            }}
          >
            👤
          </Box>
          <Box display="flex" direction="column" align="center" gap="xs">
            <Typography variant="h3">Alex Designer</Typography>
            <Typography variant="bodySm" tone="muted">
              UI/UX Designer
            </Typography>
          </Box>
          <Divider variant="dashed" color="muted" spacing="sm" />
          <Box display="flex" justify="center" gap="xl">
            <Box display="flex" direction="column" align="center">
              <Typography variant="h3">142</Typography>
              <Typography variant="caption" tone="muted">
                Projects
              </Typography>
            </Box>
            <Box display="flex" direction="column" align="center">
              <Typography variant="h3">8.2K</Typography>
              <Typography variant="caption" tone="muted">
                Followers
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card.Body>
      <Card.Footer style={{ justifyContent: 'center' }}>
        <Button variant="secondary" size="sm">
          Follow
        </Button>
        <Button variant="ghost" size="sm">
          Message
        </Button>
      </Card.Footer>
    </Card>
  ),
};

// ----------------------------------------------------------------------------
// STATS CARD
// ----------------------------------------------------------------------------

export const StatsCard: Story = {
  render: () => (
    <Box
      display="grid"
      gap="md"
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', maxWidth: '900px' }}
    >
      {[
        { label: 'Total Revenue', value: '$45,231', change: '+20.1%', positive: true },
        { label: 'Active Users', value: '12,234', change: '+8.2%', positive: true },
        { label: 'Bounce Rate', value: '24.5%', change: '-4.1%', positive: false },
      ].map((stat) => (
        <Card key={stat.label} variant="elevated" padding="md">
          <Card.Body>
            <Box display="flex" direction="column" gap="sm">
              <Typography variant="caption" tone="muted">{stat.label}</Typography>
              <Typography variant="h2">{stat.value}</Typography>
              <Typography
                variant="caption"
                tone={stat.positive ? 'success' : 'danger'}
              >
                {stat.change} from last month
              </Typography>
            </Box>
          </Card.Body>
        </Card>
      ))}
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// TESTIMONIAL CARD
// ----------------------------------------------------------------------------

export const TestimonialCard: Story = {
  render: () => (
    <Card variant="elevated" padding="lg" style={{ maxWidth: '400px' }}>
      <Card.Body>
        <Box display="flex" direction="column" gap="md">
          <Box display="flex" gap="xs">
            {[1, 2, 3, 4, 5].map((star) => (
              <Icon key={star} size="xs" color="primary" variant="ghost">
                <StarIcon />
              </Icon>
            ))}
          </Box>
          <Typography variant="body">
            "Vibe's neobrutalist aesthetic perfectly captures our brand. The component quality is exceptional."
          </Typography>
          <Box display="flex" align="center" gap="sm">
            <Box
              display="flex"
              align="center"
              justify="center"
              background="primary"
              border="default"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
              }}
            >
              <Typography variant="bodySm" weight="bold">S</Typography>
            </Box>
            <Box display="flex" direction="column">
              <Typography variant="bodySm" weight="bold">Sarah Chen</Typography>
              <Typography variant="caption" tone="muted">Design Lead, Acme Corp</Typography>
            </Box>
          </Box>
        </Box>
      </Card.Body>
    </Card>
  ),
};
