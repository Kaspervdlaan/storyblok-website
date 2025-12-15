import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Typography } from '../../atoms/Typography';
import { Button } from '../../atoms/Button';

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
        <Typography variant="h3" style={{ marginBottom: '0.5rem' }}>
          Simple Card
        </Typography>
        <Typography variant="body">
          A card with just a body section. Perfect for simple content blocks.
        </Typography>
      </Card.Body>
    </Card>
  ),
};

// ----------------------------------------------------------------------------
// VARIANTS
// ----------------------------------------------------------------------------

export const Variants: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
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
    </div>
  ),
};

// ----------------------------------------------------------------------------
// PADDING SIZES
// ----------------------------------------------------------------------------

export const PaddingSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
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
    </div>
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
      <div
        style={{
          background: '#ee9b00',
          height: '180px',
          margin: '-1.5rem -1.5rem 0 -1.5rem',
          borderBottom: '3px solid #001219',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '0.6rem 0.6rem 0 0',
        }}
      >
        <Typography variant="display" style={{ fontSize: '4rem' }}>
          🎨
        </Typography>
      </div>
      <Card.Body style={{ paddingTop: '1.5rem' }}>
        <Typography variant="caption" tone="muted">
          DESIGN TOOL
        </Typography>
        <Typography variant="h3" style={{ marginTop: '0.25rem' }}>
          Vibe Design System
        </Typography>
        <Typography
          variant="bodySm"
          tone="muted"
          style={{ marginTop: '0.5rem' }}
        >
          A neobrutalist component library for bold, unapologetic interfaces.
        </Typography>
        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <Typography variant="h3">$0</Typography>
          <Typography variant="bodySm" tone="muted">
            Free forever
          </Typography>
        </div>
      </Card.Body>
      <Card.Footer style={{ borderTop: 'none', paddingTop: 0 }}>
        <Button
          variant="primary"
          size="md"
          style={{ width: '100%' }}
        >
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
      <Card
        variant="outlined"
        padding="sm"
        style={{ borderLeft: '6px solid #0a9396' }}
      >
        <Card.Body>
          <Typography variant="caption" tone="success">
            SUCCESS
          </Typography>
          <Typography variant="bodySm" style={{ marginTop: '0.25rem' }}>
            Your changes have been saved successfully.
          </Typography>
        </Card.Body>
      </Card>

      <Card
        variant="outlined"
        padding="sm"
        style={{ borderLeft: '6px solid #ae2012' }}
      >
        <Card.Body>
          <Typography variant="caption" tone="danger">
            ERROR
          </Typography>
          <Typography variant="bodySm" style={{ marginTop: '0.25rem' }}>
            Something went wrong. Please try again.
          </Typography>
        </Card.Body>
      </Card>

      <Card
        variant="outlined"
        padding="sm"
        style={{ borderLeft: '6px solid #bb3e03' }}
      >
        <Card.Body>
          <Typography variant="caption" style={{ color: '#bb3e03' }}>
            WARNING
          </Typography>
          <Typography variant="bodySm" style={{ marginTop: '0.25rem' }}>
            Your session will expire in 5 minutes.
          </Typography>
        </Card.Body>
      </Card>
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
        background: '#005f73',
        padding: '3rem',
        minHeight: '400px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}
      >
        <Card variant="elevated" padding="lg">
          <Card.Header>
            <Typography variant="h3">01</Typography>
          </Card.Header>
          <Card.Body>
            <Typography variant="h2" style={{ marginBottom: '0.5rem' }}>
              BOLD
            </Typography>
            <Typography variant="bodySm">
              Heavy borders and offset shadows create depth and dimension.
            </Typography>
          </Card.Body>
        </Card>

        <Card variant="elevated" padding="lg">
          <Card.Header>
            <Typography variant="h3">02</Typography>
          </Card.Header>
          <Card.Body>
            <Typography variant="h2" style={{ marginBottom: '0.5rem' }}>
              LOUD
            </Typography>
            <Typography variant="bodySm">
              Electric colors that demand attention and refuse to fade.
            </Typography>
          </Card.Body>
        </Card>

        <Card variant="elevated" padding="lg">
          <Card.Header>
            <Typography variant="h3">03</Typography>
          </Card.Header>
          <Card.Body>
            <Typography variant="h2" style={{ marginBottom: '0.5rem' }}>
              RAW
            </Typography>
            <Typography variant="bodySm">
              Unapologetic design that celebrates imperfection.
            </Typography>
          </Card.Body>
        </Card>
      </div>
    </div>
  ),
};

// ----------------------------------------------------------------------------
// PROFILE CARD
// ----------------------------------------------------------------------------

export const ProfileCard: Story = {
  render: () => (
    <Card variant="elevated" padding="lg" style={{ maxWidth: '320px' }}>
      <Card.Body style={{ textAlign: 'center' }}>
        <div
          style={{
            width: '80px',
            height: '80px',
            background: '#94d2bd',
            border: '3px solid #001219',
            borderRadius: '50%',
            margin: '0 auto 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
          }}
        >
          👤
        </div>
        <Typography variant="h3">Alex Designer</Typography>
        <Typography variant="bodySm" tone="muted">
          UI/UX Designer
        </Typography>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            marginTop: '1.5rem',
            paddingTop: '1rem',
            borderTop: '2px dashed #c9bfa0',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <Typography variant="h3">142</Typography>
            <Typography variant="caption" tone="muted">
              Projects
            </Typography>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Typography variant="h3">8.2K</Typography>
            <Typography variant="caption" tone="muted">
              Followers
            </Typography>
          </div>
        </div>
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

