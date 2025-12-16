import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { Card } from '../../molecules/Card';
import { Button } from '../Button';

const meta: Meta<typeof Textarea> = {
  title: 'Atoms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['default', 'filled'],
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
    },
    fullWidth: {
      control: 'boolean',
    },
    showCharacterCount: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

// ----------------------------------------------------------------------------
// DEFAULT
// ----------------------------------------------------------------------------

export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
    size: 'md',
    variant: 'default',
    resize: 'vertical',
  },
};

// ----------------------------------------------------------------------------
// WITH LABEL
// ----------------------------------------------------------------------------

export const WithLabel: Story = {
  args: {
    label: 'Message',
    placeholder: 'Type your message here...',
  },
};

// ----------------------------------------------------------------------------
// WITH HELPER TEXT
// ----------------------------------------------------------------------------

export const WithHelperText: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter a description',
    helperText: 'Provide a detailed description of your item',
  },
};

// ----------------------------------------------------------------------------
// WITH ERROR
// ----------------------------------------------------------------------------

export const WithError: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
    defaultValue: 'This is too short',
    error: 'Message must be at least 20 characters long',
  },
};

// ----------------------------------------------------------------------------
// SIZES
// ----------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg" style={{ maxWidth: '400px' }}>
      <Box display="flex" direction="column" gap="xs">
        <Typography variant="caption">SMALL</Typography>
        <Textarea size="sm" placeholder="Small textarea" />
      </Box>
      <Box display="flex" direction="column" gap="xs">
        <Typography variant="caption">MEDIUM (DEFAULT)</Typography>
        <Textarea size="md" placeholder="Medium textarea" />
      </Box>
      <Box display="flex" direction="column" gap="xs">
        <Typography variant="caption">LARGE</Typography>
        <Textarea size="lg" placeholder="Large textarea" />
      </Box>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// VARIANTS
// ----------------------------------------------------------------------------

export const Variants: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg" style={{ maxWidth: '400px' }}>
      <Box display="flex" direction="column" gap="xs">
        <Typography variant="caption">DEFAULT</Typography>
        <Textarea variant="default" placeholder="Default variant" />
      </Box>
      <Box display="flex" direction="column" gap="xs">
        <Typography variant="caption">FILLED</Typography>
        <Textarea variant="filled" placeholder="Filled variant" />
      </Box>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// RESIZE OPTIONS
// ----------------------------------------------------------------------------

export const ResizeOptions: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg" style={{ maxWidth: '400px' }}>
      <Box display="flex" direction="column" gap="xs">
        <Typography variant="caption">NONE</Typography>
        <Textarea resize="none" placeholder="Cannot resize" />
      </Box>
      <Box display="flex" direction="column" gap="xs">
        <Typography variant="caption">VERTICAL (DEFAULT)</Typography>
        <Textarea resize="vertical" placeholder="Resize vertically" />
      </Box>
      <Box display="flex" direction="column" gap="xs">
        <Typography variant="caption">HORIZONTAL</Typography>
        <Textarea resize="horizontal" placeholder="Resize horizontally" />
      </Box>
      <Box display="flex" direction="column" gap="xs">
        <Typography variant="caption">BOTH</Typography>
        <Textarea resize="both" placeholder="Resize both ways" />
      </Box>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// CHARACTER COUNT
// ----------------------------------------------------------------------------

export const CharacterCount: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message (max 200 characters)',
    maxLength: 200,
    showCharacterCount: true,
  },
};

// ----------------------------------------------------------------------------
// DISABLED
// ----------------------------------------------------------------------------

export const Disabled: Story = {
  args: {
    label: 'Disabled Textarea',
    placeholder: 'You cannot edit this',
    disabled: true,
    defaultValue: 'This textarea is disabled',
  },
};

// ----------------------------------------------------------------------------
// FULL WIDTH
// ----------------------------------------------------------------------------

export const FullWidth: Story = {
  render: () => (
    <Box style={{ width: '100%', maxWidth: '600px' }}>
      <Textarea
        label="Full Width Textarea"
        placeholder="This textarea takes full width"
        fullWidth
      />
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// FORM EXAMPLE
// ----------------------------------------------------------------------------

export const FormExample: Story = {
  render: () => (
    <Card variant="elevated" padding="lg" style={{ maxWidth: '500px' }}>
      <Card.Header>
        <Typography variant="h3">Contact Us</Typography>
      </Card.Header>
      <Card.Body>
        <Box display="flex" direction="column" gap="md">
          <Textarea
            label="Your Message"
            placeholder="Tell us what's on your mind..."
            helperText="Please provide as much detail as possible"
            maxLength={500}
            showCharacterCount
            resize="vertical"
          />
        </Box>
      </Card.Body>
      <Card.Footer>
        <Button variant="ghost">Cancel</Button>
        <Button variant="primary">Send Message</Button>
      </Card.Footer>
    </Card>
  ),
};

// ----------------------------------------------------------------------------
// ALL STATES
// ----------------------------------------------------------------------------

export const AllStates: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg" style={{ maxWidth: '400px' }}>
      <Box display="flex" direction="column" gap="xs">
        <Typography variant="caption">DEFAULT STATE</Typography>
        <Textarea placeholder="Normal textarea" />
      </Box>
      <Box display="flex" direction="column" gap="xs">
        <Typography variant="caption">WITH VALUE</Typography>
        <Textarea defaultValue="Some entered text" />
      </Box>
      <Box display="flex" direction="column" gap="xs">
        <Typography variant="caption">FOCUSED STATE</Typography>
        <Textarea placeholder="Click to focus" autoFocus />
      </Box>
      <Box display="flex" direction="column" gap="xs">
        <Typography variant="caption">ERROR STATE</Typography>
        <Textarea defaultValue="Invalid input" error="This field has an error" />
      </Box>
      <Box display="flex" direction="column" gap="xs">
        <Typography variant="caption">DISABLED STATE</Typography>
        <Textarea placeholder="Cannot edit" disabled />
      </Box>
      <Box display="flex" direction="column" gap="xs">
        <Typography variant="caption">READ ONLY</Typography>
        <Textarea defaultValue="Read only value" readOnly />
      </Box>
    </Box>
  ),
};

