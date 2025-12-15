import type { Meta, StoryObj } from '@storybook/react';
import { Section } from './Section';
import { Container } from '../Container';
import { Typography } from '../Typography';
import { Box } from '../Box';
import { Card } from '../../molecules/Card';
import { Button } from '../Button';

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
      options: ['none', 'subtle', 'primary', 'dark', 'secondary'],
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
        <Box display="flex" direction="column" gap="md">
          <Typography variant="h2">Section Title</Typography>
          <Typography variant="body">
            This is a section with default spacing and no background. Sections
            help structure your page content vertically.
          </Typography>
        </Box>
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
          <Box display="flex" direction="column" gap="sm">
            <Typography variant="h3">Small Spacing</Typography>
            <Typography variant="body">
              Compact section with minimal vertical padding.
            </Typography>
          </Box>
        </Container>
      </Section>

      <Section spacing="md" background="none">
        <Container maxWidth="lg">
          <Box display="flex" direction="column" gap="sm">
            <Typography variant="h3">Medium Spacing (Default)</Typography>
            <Typography variant="body">
              Standard section spacing for most content.
            </Typography>
          </Box>
        </Container>
      </Section>

      <Section spacing="lg" background="subtle">
        <Container maxWidth="lg">
          <Box display="flex" direction="column" gap="sm">
            <Typography variant="h3">Large Spacing</Typography>
            <Typography variant="body">
              More breathing room for important sections.
            </Typography>
          </Box>
        </Container>
      </Section>

      <Section spacing="xl" background="none">
        <Container maxWidth="lg">
          <Box display="flex" direction="column" gap="sm">
            <Typography variant="h3">Extra Large Spacing</Typography>
            <Typography variant="body">
              Maximum spacing for hero sections or major content blocks.
            </Typography>
          </Box>
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
          <Box display="flex" direction="column" gap="sm">
            <Typography variant="h3">No Background</Typography>
            <Typography variant="body">
              Transparent background, inherits from parent.
            </Typography>
          </Box>
        </Container>
      </Section>

      <Section spacing="md" background="subtle">
        <Container maxWidth="lg">
          <Box display="flex" direction="column" gap="sm">
            <Typography variant="h3">Subtle Background</Typography>
            <Typography variant="body">
              Light gray background for visual separation.
            </Typography>
          </Box>
        </Container>
      </Section>

      <Section spacing="md" background="primary">
        <Container maxWidth="lg">
          <Box display="flex" direction="column" gap="sm">
            <Typography variant="h3">Primary Background</Typography>
            <Typography variant="body">
              Bold gamboge orange background for maximum impact.
            </Typography>
          </Box>
        </Container>
      </Section>

      <Section spacing="md" background="dark">
        <Container maxWidth="lg">
          <Box display="flex" direction="column" gap="sm">
            <Typography variant="h3" style={{ color: '#e9d8a6' }}>Dark Background</Typography>
            <Typography variant="body" style={{ color: '#8a8477' }}>
              Rich black background for dramatic contrast.
            </Typography>
          </Box>
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
          <Box display="flex" direction="column" gap="md">
            <Typography variant="display">MAKE IT BOLD</Typography>
            <Typography variant="h3" weight="regular">
              A design system that refuses to blend in
            </Typography>
          </Box>
        </Container>
      </Section>

      {/* Features Section */}
      <Section spacing="lg" background="none">
        <Container maxWidth="lg">
          <Box display="flex" direction="column" gap="xl">
            <Typography variant="h2">FEATURES</Typography>
            <Box
              display="grid"
              gap="lg"
              style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              }}
            >
              {['BOLD COLORS', 'HEAVY BORDERS', 'SHARP EDGES'].map((feature) => (
                <Card key={feature} variant="elevated" padding="lg">
                  <Card.Body>
                    <Typography variant="h3">{feature}</Typography>
                  </Card.Body>
                </Card>
              ))}
            </Box>
          </Box>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="lg" background="subtle">
        <Container maxWidth="md">
          <Box display="flex" direction="column" gap="md" align="center">
            <Typography variant="h2" align="center">READY TO START?</Typography>
            <Typography variant="body" align="center">
              Join the neobrutalist revolution
            </Typography>
            <Button variant="primary" size="lg">Get Started</Button>
          </Box>
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
            <Box display="flex" direction="column" gap="sm">
              <Typography variant="h3">Section {num}</Typography>
              <Typography variant="body">
                Alternating backgrounds create visual rhythm and help users
                distinguish between different content blocks.
              </Typography>
            </Box>
          </Container>
        </Section>
      ))}
    </div>
  ),
};
