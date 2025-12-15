import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';
import { Box } from '../Box';
import { Section } from '../Section';
import { Container } from '../Container';

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['display', 'h1', 'h2', 'h3', 'body', 'bodySm', 'caption'],
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold', 'bold'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    tone: {
      control: 'select',
      options: ['default', 'muted', 'danger', 'success'],
    },
    as: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

// ----------------------------------------------------------------------------
// DEFAULT
// ----------------------------------------------------------------------------

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'body',
  },
};

// ----------------------------------------------------------------------------
// ALL VARIANTS
// ----------------------------------------------------------------------------

export const AllVariants: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg">
      <Typography variant="display">Display — Bold Statement</Typography>
      <Typography variant="h1">Heading 1 — Page Title</Typography>
      <Typography variant="h2">Heading 2 — Section Title</Typography>
      <Typography variant="h3">Heading 3 — Subsection</Typography>
      <Typography variant="body">
        Body — The quick brown fox jumps over the lazy dog. This is the default
        paragraph style used throughout the design system.
      </Typography>
      <Typography variant="bodySm">
        Body Small — Slightly smaller body text for secondary content and
        descriptions.
      </Typography>
      <Typography variant="caption">Caption — Labels & Metadata</Typography>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// WEIGHTS
// ----------------------------------------------------------------------------

export const Weights: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="md">
      <Typography variant="h3" weight="regular">
        Regular (400) — Light touch
      </Typography>
      <Typography variant="h3" weight="medium">
        Medium (500) — Balanced
      </Typography>
      <Typography variant="h3" weight="semibold">
        Semibold (600) — Emphasis
      </Typography>
      <Typography variant="h3" weight="bold">
        Bold (700) — Maximum impact
      </Typography>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// TONES
// ----------------------------------------------------------------------------

export const Tones: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="md">
      <Typography variant="body" tone="default">
        Default — Standard text color for primary content
      </Typography>
      <Typography variant="body" tone="muted">
        Muted — Secondary content and descriptions
      </Typography>
      <Typography variant="body" tone="danger">
        Danger — Error messages and warnings
      </Typography>
      <Typography variant="body" tone="success">
        Success — Confirmation and success states
      </Typography>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// ALIGNMENT
// ----------------------------------------------------------------------------

export const Alignment: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="md">
      <Typography variant="h3" align="left">
        Left aligned (default)
      </Typography>
      <Typography variant="h3" align="center">
        Center aligned
      </Typography>
      <Typography variant="h3" align="right">
        Right aligned
      </Typography>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// CUSTOM ELEMENT
// ----------------------------------------------------------------------------

export const CustomElement: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="md">
      <Typography variant="h1" as="span">
        H1 styled as span
      </Typography>
      <Typography variant="body" as="div">
        Body styled as div
      </Typography>
      <Typography variant="caption" as="label">
        Caption styled as label
      </Typography>
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
    <Section spacing="xl" background="primary">
      <Container maxWidth="lg">
        <Box display="flex" direction="column" gap="lg">
          <Typography variant="display">
            BREAK THE RULES
          </Typography>
          <Typography variant="h2">
            Design without compromise
          </Typography>
          <Typography variant="body" style={{ maxWidth: '600px' }}>
            Neobrutalism embraces bold colors, heavy borders, and unapologetic
            typography. This design system brings that raw energy to your React
            applications.
          </Typography>
        </Box>
      </Container>
    </Section>
  ),
};

// ----------------------------------------------------------------------------
// TYPOGRAPHY SCALE
// ----------------------------------------------------------------------------

export const TypographyScale: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <Section spacing="lg">
      <Container maxWidth="lg">
        <Box display="flex" direction="column" gap="xl">
          <Box display="flex" direction="column" gap="sm">
            <Typography variant="caption">TYPOGRAPHY SCALE</Typography>
            <Typography variant="h2">Complete Type System</Typography>
          </Box>
          
          <Box display="flex" direction="column" gap="lg">
            <Box display="flex" align="baseline" gap="lg" style={{ flexWrap: 'wrap' }}>
              <Box style={{ width: '120px' }}>
                <Typography variant="caption" tone="muted">Display</Typography>
              </Box>
              <Typography variant="display">Aa</Typography>
            </Box>
            
            <Box display="flex" align="baseline" gap="lg" style={{ flexWrap: 'wrap' }}>
              <Box style={{ width: '120px' }}>
                <Typography variant="caption" tone="muted">Heading 1</Typography>
              </Box>
              <Typography variant="h1">Aa</Typography>
            </Box>
            
            <Box display="flex" align="baseline" gap="lg" style={{ flexWrap: 'wrap' }}>
              <Box style={{ width: '120px' }}>
                <Typography variant="caption" tone="muted">Heading 2</Typography>
              </Box>
              <Typography variant="h2">Aa</Typography>
            </Box>
            
            <Box display="flex" align="baseline" gap="lg" style={{ flexWrap: 'wrap' }}>
              <Box style={{ width: '120px' }}>
                <Typography variant="caption" tone="muted">Heading 3</Typography>
              </Box>
              <Typography variant="h3">Aa</Typography>
            </Box>
            
            <Box display="flex" align="baseline" gap="lg" style={{ flexWrap: 'wrap' }}>
              <Box style={{ width: '120px' }}>
                <Typography variant="caption" tone="muted">Body</Typography>
              </Box>
              <Typography variant="body">The quick brown fox jumps over the lazy dog.</Typography>
            </Box>
            
            <Box display="flex" align="baseline" gap="lg" style={{ flexWrap: 'wrap' }}>
              <Box style={{ width: '120px' }}>
                <Typography variant="caption" tone="muted">Body Small</Typography>
              </Box>
              <Typography variant="bodySm">The quick brown fox jumps over the lazy dog.</Typography>
            </Box>
            
            <Box display="flex" align="baseline" gap="lg" style={{ flexWrap: 'wrap' }}>
              <Box style={{ width: '120px' }}>
                <Typography variant="caption" tone="muted">Caption</Typography>
              </Box>
              <Typography variant="caption">THE QUICK BROWN FOX</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Section>
  ),
};
