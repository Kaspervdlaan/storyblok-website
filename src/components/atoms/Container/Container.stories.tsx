import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';
import { Typography } from '../Typography';
import { Box } from '../Box';
import { Section } from '../Section';
import { Card } from '../../molecules/Card';

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
  <Box padding="md" border="muted" radius="md">
    <Typography variant="h3">{label}</Typography>
    <Typography variant="body" tone="muted">
      This content is centered within the container
    </Typography>
  </Box>
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
    <Box display="flex" direction="column" gap="xl">
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
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// PADDING VARIANTS
// ----------------------------------------------------------------------------

export const PaddingVariants: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="xl">
      <Box background="muted">
        <Container maxWidth="md" padding="none">
          <DemoContent label="No Padding" />
        </Container>
      </Box>
      <Box background="muted">
        <Container maxWidth="md" padding="sm">
          <DemoContent label="Small Padding" />
        </Container>
      </Box>
      <Box background="muted">
        <Container maxWidth="md" padding="md">
          <DemoContent label="Medium Padding (default)" />
        </Container>
      </Box>
      <Box background="muted">
        <Container maxWidth="md" padding="lg">
          <DemoContent label="Large Padding" />
        </Container>
      </Box>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// NEOBRUTALIST LAYOUT
// ----------------------------------------------------------------------------

export const NeobrutalistLayout: Story = {
  render: () => (
    <Section spacing="xl" background="dark">
      <Container maxWidth="lg" padding="md">
        <Box
          padding="xl"
          background="surface"
          border="default"
          radius="lg"
        >
          <Typography variant="display" style={{ marginBottom: '1rem' }}>
            CONTAINED CONTENT
          </Typography>
          <Typography variant="body">
            The container component provides consistent max-widths and padding
            for your content. Perfect for creating readable text blocks and
            centered layouts.
          </Typography>
        </Box>
      </Container>
    </Section>
  ),
};

// ----------------------------------------------------------------------------
// RESPONSIVE DEMO
// ----------------------------------------------------------------------------

export const ResponsiveDemo: Story = {
  render: () => (
    <Section spacing="lg">
      <Container maxWidth="xl" padding="lg">
        <Box
          display="grid"
          gap="lg"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          }}
        >
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} variant="elevated" padding="lg">
              <Card.Body>
                <Typography variant="h3">Card {i}</Typography>
                <Typography variant="bodySm" tone="muted">
                  Responsive grid inside container
                </Typography>
              </Card.Body>
            </Card>
          ))}
        </Box>
      </Container>
    </Section>
  ),
};

// ----------------------------------------------------------------------------
// NESTED CONTAINERS
// ----------------------------------------------------------------------------

export const NestedContainers: Story = {
  render: () => (
    <Section spacing="lg" background="subtle">
      <Container maxWidth="xl">
        <Box display="flex" direction="column" gap="lg">
          <Typography variant="h2">Full Width Header</Typography>
          
          <Container maxWidth="md" padding="none">
            <Box padding="lg" background="surface" border="default" radius="md">
              <Typography variant="h3">Narrower Content</Typography>
              <Typography variant="body" tone="muted">
                This content is in a nested container with medium max-width, 
                creating a nice reading experience for long-form content.
              </Typography>
            </Box>
          </Container>
        </Box>
      </Container>
    </Section>
  ),
};
