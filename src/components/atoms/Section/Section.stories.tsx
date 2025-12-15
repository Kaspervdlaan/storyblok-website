import type { Meta, StoryObj } from '@storybook/react';
import { Section } from './Section';
import { Container } from '../Container';
import { Typography } from '../Typography';

const meta: Meta<typeof Section> = {
  title: 'Atoms/Section',
  component: Section,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    spacing: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    background: {
      control: 'select',
      options: ['none', 'subtle', 'primary'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Section>;

// ----------------------------------------------------------------------------
// DEFAULT
// ----------------------------------------------------------------------------

export const Default: Story = {
  args: {
    spacing: 'md',
    background: 'none',
  },
  render: (args) => (
    <Section {...args}>
      <Container maxWidth="lg">
        <Typography variant="h2">Section Title</Typography>
        <Typography variant="body">
          This is a section with default spacing and no background. Sections
          help structure your page content vertically.
        </Typography>
      </Container>
    </Section>
  ),
};

// ----------------------------------------------------------------------------
// SPACING VARIANTS
// ----------------------------------------------------------------------------

export const SpacingVariants: Story = {
  render: () => (
    <div>
      <Section spacing="sm" background="subtle">
        <Container maxWidth="lg">
          <Typography variant="h3">Small Spacing</Typography>
          <Typography variant="body">
            Compact section with minimal vertical padding.
          </Typography>
        </Container>
      </Section>

      <Section spacing="md" background="none">
        <Container maxWidth="lg">
          <Typography variant="h3">Medium Spacing (Default)</Typography>
          <Typography variant="body">
            Standard section spacing for most content.
          </Typography>
        </Container>
      </Section>

      <Section spacing="lg" background="subtle">
        <Container maxWidth="lg">
          <Typography variant="h3">Large Spacing</Typography>
          <Typography variant="body">
            More breathing room for important sections.
          </Typography>
        </Container>
      </Section>

      <Section spacing="xl" background="none">
        <Container maxWidth="lg">
          <Typography variant="h3">Extra Large Spacing</Typography>
          <Typography variant="body">
            Maximum spacing for hero sections or major content blocks.
          </Typography>
        </Container>
      </Section>
    </div>
  ),
};

// ----------------------------------------------------------------------------
// BACKGROUND VARIANTS
// ----------------------------------------------------------------------------

export const BackgroundVariants: Story = {
  render: () => (
    <div>
      <Section spacing="md" background="none">
        <Container maxWidth="lg">
          <Typography variant="h3">No Background</Typography>
          <Typography variant="body">
            Transparent background, inherits from parent.
          </Typography>
        </Container>
      </Section>

      <Section spacing="md" background="subtle">
        <Container maxWidth="lg">
          <Typography variant="h3">Subtle Background</Typography>
          <Typography variant="body">
            Light gray background for visual separation.
          </Typography>
        </Container>
      </Section>

      <Section spacing="md" background="primary">
        <Container maxWidth="lg">
          <Typography variant="h3">Primary Background</Typography>
          <Typography variant="body">
            Bold gamboge orange background for maximum impact.
          </Typography>
        </Container>
      </Section>
    </div>
  ),
};

// ----------------------------------------------------------------------------
// NEOBRUTALIST PAGE LAYOUT
// ----------------------------------------------------------------------------

export const NeobrutalistPageLayout: Story = {
  render: () => (
    <div>
      {/* Hero Section */}
      <Section spacing="xl" background="primary">
        <Container maxWidth="lg">
          <Typography variant="display">MAKE IT BOLD</Typography>
          <Typography
            variant="h3"
            weight="regular"
            style={{ marginTop: '1rem' }}
          >
            A design system that refuses to blend in
          </Typography>
        </Container>
      </Section>

      {/* Features Section */}
      <Section spacing="lg" background="none">
        <Container maxWidth="lg">
          <Typography variant="h2" style={{ marginBottom: '2rem' }}>
            FEATURES
          </Typography>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {['BOLD COLORS', 'HEAVY BORDERS', 'SHARP EDGES'].map((feature) => (
              <div
                key={feature}
                style={{
                  background: '#fff',
                  border: '3px solid #001219',
                  padding: '2rem',
                  boxShadow: '4px 4px 0 0 #001219',
                  borderRadius: '0.6rem',
                }}
              >
                <Typography variant="h3">{feature}</Typography>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="lg" background="subtle">
        <Container maxWidth="md">
          <div style={{ textAlign: 'center' }}>
            <Typography variant="h2">READY TO START?</Typography>
            <Typography variant="body" style={{ marginTop: '1rem' }}>
              Join the neobrutalist revolution
            </Typography>
          </div>
        </Container>
      </Section>
    </div>
  ),
};

// ----------------------------------------------------------------------------
// ALTERNATING SECTIONS
// ----------------------------------------------------------------------------

export const AlternatingSections: Story = {
  render: () => (
    <div>
      {[1, 2, 3, 4, 5].map((num) => (
        <Section
          key={num}
          spacing="md"
          background={num % 2 === 0 ? 'subtle' : 'none'}
        >
          <Container maxWidth="lg">
            <Typography variant="h3">Section {num}</Typography>
            <Typography variant="body">
              Alternating backgrounds create visual rhythm and help users
              distinguish between different content blocks.
            </Typography>
          </Container>
        </Section>
      ))}
    </div>
  ),
};

