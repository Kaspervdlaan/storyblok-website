import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../../atoms/Button';
import { Stack } from '../../atoms/Stack';
import { Typography } from '../../atoms/Typography';
import { Icon } from '../../atoms/Icon';
import { Section } from '../../atoms/Section';
import { Container } from '../../atoms/Container';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Molecules/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'attached'],
    },
    direction: {
      control: 'select',
      options: ['row', 'column'],
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    fullWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

// ============================================================================
// ICONS
// ============================================================================

const ChevronLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const BoldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
    <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
  </svg>
);

const ItalicIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="4" x2="10" y2="4"/>
    <line x1="14" y1="20" x2="5" y2="20"/>
    <line x1="15" y1="4" x2="9" y2="20"/>
  </svg>
);

const UnderlineIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"/>
    <line x1="4" y1="21" x2="20" y2="21"/>
  </svg>
);

const AlignLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="17" y1="10" x2="3" y2="10"/>
    <line x1="21" y1="6" x2="3" y2="6"/>
    <line x1="21" y1="14" x2="3" y2="14"/>
    <line x1="17" y1="18" x2="3" y2="18"/>
  </svg>
);

const AlignCenterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="10" x2="6" y2="10"/>
    <line x1="21" y1="6" x2="3" y2="6"/>
    <line x1="21" y1="14" x2="3" y2="14"/>
    <line x1="18" y1="18" x2="6" y2="18"/>
  </svg>
);

const AlignRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="21" y1="10" x2="7" y2="10"/>
    <line x1="21" y1="6" x2="3" y2="6"/>
    <line x1="21" y1="14" x2="3" y2="14"/>
    <line x1="21" y1="18" x2="7" y2="18"/>
  </svg>
);

// ============================================================================
// DEFAULT
// ============================================================================

export const Default: Story = {
  args: {
    children: (
      <>
        <Button variant="secondary">One</Button>
        <Button variant="secondary">Two</Button>
        <Button variant="secondary">Three</Button>
      </>
    ),
  },
};

// ============================================================================
// VARIANTS
// ============================================================================

export const Variants: Story = {
  render: () => (
    <Stack direction="column" gap="lg">
      <Stack direction="column" gap="xs">
        <Typography variant="caption">DEFAULT (with gap)</Typography>
        <ButtonGroup variant="default" gap="sm">
          <Button variant="secondary">One</Button>
          <Button variant="secondary">Two</Button>
          <Button variant="secondary">Three</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="column" gap="xs">
        <Typography variant="caption">ATTACHED (connected buttons)</Typography>
        <ButtonGroup variant="attached">
          <Button variant="secondary">One</Button>
          <Button variant="secondary">Two</Button>
          <Button variant="secondary">Three</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  ),
};

// ============================================================================
// DIRECTION
// ============================================================================

export const Direction: Story = {
  render: () => (
    <Stack direction="row" gap="xl">
      <Stack direction="column" gap="xs">
        <Typography variant="caption">HORIZONTAL</Typography>
        <ButtonGroup variant="attached" direction="row">
          <Button variant="secondary">Left</Button>
          <Button variant="secondary">Center</Button>
          <Button variant="secondary">Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="column" gap="xs">
        <Typography variant="caption">VERTICAL</Typography>
        <ButtonGroup variant="attached" direction="column">
          <Button variant="secondary">Top</Button>
          <Button variant="secondary">Middle</Button>
          <Button variant="secondary">Bottom</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  ),
};

// ============================================================================
// PAGINATION
// ============================================================================

export const Pagination: Story = {
  render: () => (
    <Stack direction="column" gap="lg">
      <Typography variant="caption">PAGINATION EXAMPLE</Typography>
      <ButtonGroup variant="attached">
        <Button variant="ghost" leftIcon={<ChevronLeftIcon />}>Prev</Button>
        <Button variant="ghost">1</Button>
        <Button variant="primary">2</Button>
        <Button variant="ghost">3</Button>
        <Button variant="ghost">4</Button>
        <Button variant="ghost">5</Button>
        <Button variant="ghost" rightIcon={<ChevronRightIcon />}>Next</Button>
      </ButtonGroup>
    </Stack>
  ),
};

// ============================================================================
// TOOLBAR
// ============================================================================

export const Toolbar: Story = {
  render: () => (
    <Stack direction="column" gap="lg">
      <Typography variant="caption">TEXT FORMATTING TOOLBAR</Typography>
      <Stack direction="row" gap="md">
        <ButtonGroup variant="attached">
          <Button variant="ghost" size="sm">
            <Icon size="xs" color="neutral" variant="ghost"><BoldIcon /></Icon>
          </Button>
          <Button variant="ghost" size="sm">
            <Icon size="xs" color="neutral" variant="ghost"><ItalicIcon /></Icon>
          </Button>
          <Button variant="ghost" size="sm">
            <Icon size="xs" color="neutral" variant="ghost"><UnderlineIcon /></Icon>
          </Button>
        </ButtonGroup>

        <ButtonGroup variant="attached">
          <Button variant="ghost" size="sm">
            <Icon size="xs" color="neutral" variant="ghost"><AlignLeftIcon /></Icon>
          </Button>
          <Button variant="primary" size="sm">
            <Icon size="xs" color="neutral" variant="ghost"><AlignCenterIcon /></Icon>
          </Button>
          <Button variant="ghost" size="sm">
            <Icon size="xs" color="neutral" variant="ghost"><AlignRightIcon /></Icon>
          </Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  ),
};

// ============================================================================
// ACTION GROUP
// ============================================================================

export const ActionGroup: Story = {
  render: () => (
    <Stack direction="column" gap="lg">
      <Typography variant="caption">FORM ACTIONS</Typography>
      <ButtonGroup gap="sm">
        <Button variant="primary">Save Changes</Button>
        <Button variant="secondary">Save Draft</Button>
        <Button variant="ghost">Cancel</Button>
      </ButtonGroup>
    </Stack>
  ),
};

// ============================================================================
// FULL WIDTH
// ============================================================================

export const FullWidth: Story = {
  render: () => (
    <Stack direction="column" gap="lg" style={{ maxWidth: '400px' }}>
      <Stack direction="column" gap="xs">
        <Typography variant="caption">FULL WIDTH - HORIZONTAL</Typography>
        <ButtonGroup variant="attached" fullWidth>
          <Button variant="secondary">Option A</Button>
          <Button variant="secondary">Option B</Button>
          <Button variant="secondary">Option C</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="column" gap="xs">
        <Typography variant="caption">FULL WIDTH - VERTICAL</Typography>
        <ButtonGroup variant="attached" direction="column" fullWidth>
          <Button variant="secondary">First Choice</Button>
          <Button variant="primary">Second Choice</Button>
          <Button variant="secondary">Third Choice</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  ),
};

// ============================================================================
// MIXED VARIANTS
// ============================================================================

export const MixedVariants: Story = {
  render: () => (
    <Stack direction="column" gap="lg">
      <Typography variant="caption">BUTTONS WITH DIFFERENT VARIANTS</Typography>
      <ButtonGroup variant="attached">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </ButtonGroup>
    </Stack>
  ),
};

// ============================================================================
// DISABLED
// ============================================================================

export const Disabled: Story = {
  render: () => (
    <Stack direction="column" gap="lg">
      <Stack direction="column" gap="xs">
        <Typography variant="caption">ENTIRE GROUP DISABLED</Typography>
        <ButtonGroup variant="attached" disabled>
          <Button variant="secondary">One</Button>
          <Button variant="secondary">Two</Button>
          <Button variant="secondary">Three</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="column" gap="xs">
        <Typography variant="caption">INDIVIDUAL BUTTON DISABLED</Typography>
        <ButtonGroup variant="attached">
          <Button variant="secondary">Active</Button>
          <Button variant="secondary" disabled>Disabled</Button>
          <Button variant="secondary">Active</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  ),
};

// ============================================================================
// SHOWCASE
// ============================================================================

export const Showcase: Story = {
  render: () => (
    <Section spacing="lg" background="subtle">
      <Container maxWidth="lg">
        <Stack direction="column" gap="xl">
          <Typography variant="h2">ButtonGroup Showcase</Typography>

          <Stack direction="row" gap="xl" wrap="wrap">
            {/* Segmented Control */}
            <Stack direction="column" gap="sm">
              <Typography variant="caption">SEGMENTED CONTROL</Typography>
              <ButtonGroup variant="attached">
                <Button variant="primary">Daily</Button>
                <Button variant="ghost">Weekly</Button>
                <Button variant="ghost">Monthly</Button>
                <Button variant="ghost">Yearly</Button>
              </ButtonGroup>
            </Stack>

            {/* Toggle Group */}
            <Stack direction="column" gap="sm">
              <Typography variant="caption">TOGGLE GROUP</Typography>
              <ButtonGroup variant="attached">
                <Button variant="secondary" size="sm">
                  <Icon size="xs" color="neutral" variant="ghost"><AlignLeftIcon /></Icon>
                </Button>
                <Button variant="primary" size="sm">
                  <Icon size="xs" color="neutral" variant="ghost"><AlignCenterIcon /></Icon>
                </Button>
                <Button variant="secondary" size="sm">
                  <Icon size="xs" color="neutral" variant="ghost"><AlignRightIcon /></Icon>
                </Button>
              </ButtonGroup>
            </Stack>

            {/* Split Button */}
            <Stack direction="column" gap="sm">
              <Typography variant="caption">SPLIT BUTTON</Typography>
              <ButtonGroup variant="attached">
                <Button variant="primary">Save</Button>
                <Button variant="primary" style={{ padding: '0 0.5rem' }}>▼</Button>
              </ButtonGroup>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Section>
  ),
};

