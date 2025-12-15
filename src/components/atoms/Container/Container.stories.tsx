import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';
import { Typography } from '../Typography';

const meta: Meta<typeof Container> = {
  title: 'Atoms/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

// Demo content component
const DemoContent = ({ label }: { label: string }) => (
  <div style={{
    border: '1px dashed #001219',
  }}>
    <Typography variant="h3">{label}</Typography>
    <Typography variant="body" tone="muted">
      This content is centered within the container
    </Typography>
  </div>
);

// ----------------------------------------------------------------------------
// DEFAULT
// ----------------------------------------------------------------------------

export const Default: Story = {
  args: {
    maxWidth: 'lg',
    padding: 'md',
    children: <DemoContent label="Default Container (lg)" />,
  },
};

// ----------------------------------------------------------------------------
// ALL WIDTHS
// ----------------------------------------------------------------------------

export const AllWidths: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Container maxWidth="sm">
        <DemoContent label="Small (640px)" />
      </Container>
      <Container maxWidth="md">
        <DemoContent label="Medium (768px)" />
      </Container>
      <Container maxWidth="lg">
        <DemoContent label="Large (1024px)" />
      </Container>
      <Container maxWidth="xl">
        <DemoContent label="Extra Large (1280px)" />
      </Container>
    </div>
  ),
};

// ----------------------------------------------------------------------------
// PADDING VARIANTS
// ----------------------------------------------------------------------------

export const PaddingVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ background: '#f0f0f0' }}>
        <Container maxWidth="md" padding="none">
          <DemoContent label="No Padding" />
        </Container>
      </div>
      <div style={{ background: '#f0f0f0' }}>
        <Container maxWidth="md" padding="sm">
          <DemoContent label="Small Padding" />
        </Container>
      </div>
      <div style={{ background: '#f0f0f0' }}>
        <Container maxWidth="md" padding="md">
          <DemoContent label="Medium Padding (default)" />
        </Container>
      </div>
      <div style={{ background: '#f0f0f0' }}>
        <Container maxWidth="md" padding="lg">
          <DemoContent label="Large Padding" />
        </Container>
      </div>
    </div>
  ),
};

// ----------------------------------------------------------------------------
// NEOBRUTALIST LAYOUT
// ----------------------------------------------------------------------------

export const NeobrutalistLayout: Story = {
  render: () => (
    <div style={{ background: '#001219', minHeight: '100vh', padding: '2rem 0' }}>
      <Container maxWidth="lg" padding="md">
        <div
          style={{
            background: '#fff',
            border: '4px solid #001219',
            padding: '3rem',
            borderRadius: '0.6rem',
          }}
        >
          <Typography variant="display" style={{ marginBottom: '1rem' }}>
            CONTAINED CONTENT
          </Typography>
          <Typography variant="body">
            The container component provides consistent max-widths and padding
            for your content. Perfect for creating readable text blocks and
            centered layouts.
          </Typography>
        </div>
      </Container>
    </div>
  ),
};

// ----------------------------------------------------------------------------
// RESPONSIVE DEMO
// ----------------------------------------------------------------------------

export const ResponsiveDemo: Story = {
  render: () => (
    <Container maxWidth="xl" padding="lg">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            style={{
              background: i % 2 === 0 ? '#0a9396' : '#ee9b00',
              color: i % 2 === 0 ? '#fff' : '#001219',
              border: '3px solid #001219',
              padding: '2rem',
              boxShadow: '4px 4px 0 0 #001219',
              borderRadius: '0.6rem',
            }}
          >
            <Typography variant="h3">Card {i}</Typography>
            <Typography variant="bodySm">
              Responsive grid inside container
            </Typography>
          </div>
        ))}
      </div>
    </Container>
  ),
};

