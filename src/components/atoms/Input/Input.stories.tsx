import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { Section } from '../Section';
import { Container } from '../Container';
import { Card } from '../../molecules/Card';
import { Button } from '../Button';
import { Divider } from '../Divider';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
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
    fullWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// ----------------------------------------------------------------------------
// ICONS
// ----------------------------------------------------------------------------

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

// ----------------------------------------------------------------------------
// DEFAULT
// ----------------------------------------------------------------------------

export const Default: Story = {
  args: {
    placeholder: 'Enter your text...',
    size: 'md',
    variant: 'default',
  },
};

// ----------------------------------------------------------------------------
// WITH LABEL
// ----------------------------------------------------------------------------

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    type: 'email',
  },
};

// ----------------------------------------------------------------------------
// WITH HELPER TEXT
// ----------------------------------------------------------------------------

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    helperText: 'Must be at least 8 characters long',
  },
};

// ----------------------------------------------------------------------------
// WITH ERROR
// ----------------------------------------------------------------------------

export const WithError: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'you@example.com',
    defaultValue: 'invalid-email',
    error: 'Please enter a valid email address',
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
        <Input size="sm" placeholder="Small input" />
      </Box>
      <Box display="flex" direction="column" gap="xs">
        <Typography variant="caption">MEDIUM (DEFAULT)</Typography>
        <Input size="md" placeholder="Medium input" />
      </Box>
      <Box display="flex" direction="column" gap="xs">
        <Typography variant="caption">LARGE</Typography>
        <Input size="lg" placeholder="Large input" />
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
        <Input variant="default" placeholder="Default variant" />
      </Box>
      <Box display="flex" direction="column" gap="xs">
        <Typography variant="caption">FILLED</Typography>
        <Input variant="filled" placeholder="Filled variant" />
      </Box>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// WITH ICONS
// ----------------------------------------------------------------------------

export const WithIcons: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg" style={{ maxWidth: '400px' }}>
      <Input
        leftIcon={<SearchIcon />}
        placeholder="Search..."
        label="Search"
      />
      <Input
        leftIcon={<MailIcon />}
        placeholder="you@example.com"
        label="Email"
        type="email"
      />
      <Input
        leftIcon={<LockIcon />}
        rightIcon={<EyeIcon />}
        placeholder="Enter password"
        label="Password"
        type="password"
      />
      <Input
        leftIcon={<UserIcon />}
        placeholder="Enter username"
        label="Username"
      />
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// DISABLED
// ----------------------------------------------------------------------------

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'You cannot edit this',
    disabled: true,
  },
};

// ----------------------------------------------------------------------------
// FULL WIDTH
// ----------------------------------------------------------------------------

export const FullWidth: Story = {
  render: () => (
    <Box style={{ width: '100%', maxWidth: '600px' }}>
      <Input
        label="Full Width Input"
        placeholder="This input takes full width"
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
    <Card variant="elevated" padding="lg" style={{ maxWidth: '400px' }}>
      <Card.Header>
        <Typography variant="h3">Create Account</Typography>
      </Card.Header>
      <Card.Body>
        <Box display="flex" direction="column" gap="md">
          <Input
            label="Full Name"
            placeholder="John Doe"
            leftIcon={<UserIcon />}
          />
          <Input
            label="Email Address"
            placeholder="john@example.com"
            type="email"
            leftIcon={<MailIcon />}
          />
          <Input
            label="Password"
            placeholder="Create a password"
            type="password"
            leftIcon={<LockIcon />}
            rightIcon={<EyeIcon />}
            helperText="Must be at least 8 characters"
          />
          <Input
            label="Confirm Password"
            placeholder="Confirm your password"
            type="password"
            leftIcon={<LockIcon />}
          />
        </Box>
      </Card.Body>
      <Card.Footer>
        <Button variant="ghost">Cancel</Button>
        <Button variant="primary">Create Account</Button>
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
        <Input placeholder="Normal input" />
      </Box>
      <Box display="flex" direction="column" gap="xs">
        <Typography variant="caption">WITH VALUE</Typography>
        <Input defaultValue="Some entered text" />
      </Box>
      <Box display="flex" direction="column" gap="xs">
        <Typography variant="caption">FOCUSED STATE</Typography>
        <Input placeholder="Click to focus" autoFocus />
      </Box>
      <Box display="flex" direction="column" gap="xs">
        <Typography variant="caption">ERROR STATE</Typography>
        <Input defaultValue="Invalid input" error="This field has an error" />
      </Box>
      <Box display="flex" direction="column" gap="xs">
        <Typography variant="caption">DISABLED STATE</Typography>
        <Input placeholder="Cannot edit" disabled />
      </Box>
      <Box display="flex" direction="column" gap="xs">
        <Typography variant="caption">READ ONLY</Typography>
        <Input defaultValue="Read only value" readOnly />
      </Box>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// INPUT TYPES
// ----------------------------------------------------------------------------

export const InputTypes: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg" style={{ maxWidth: '400px' }}>
      <Input label="Text" type="text" placeholder="Enter text" />
      <Input label="Email" type="email" placeholder="you@example.com" />
      <Input label="Password" type="password" placeholder="Enter password" />
      <Input label="Number" type="number" placeholder="0" />
      <Input label="Tel" type="tel" placeholder="+1 (555) 000-0000" />
      <Input label="URL" type="url" placeholder="https://example.com" />
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// LOGIN FORM
// ----------------------------------------------------------------------------

export const LoginForm: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <Section spacing="xl" background="subtle">
      <Container maxWidth="sm">
        <Card variant="elevated" padding="lg">
          <Card.Body>
            <Box display="flex" direction="column" gap="lg">
              <Box display="flex" direction="column" gap="sm" align="center">
                <Typography variant="h2">Welcome Back</Typography>
                <Typography variant="body" tone="muted">
                  Sign in to your account
                </Typography>
              </Box>
              
              <Box display="flex" direction="column" gap="md">
                <Input
                  label="Email"
                  placeholder="you@example.com"
                  type="email"
                  leftIcon={<MailIcon />}
                />
                <Input
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  leftIcon={<LockIcon />}
                />
              </Box>
              
              <Button variant="primary" fullWidth>Sign In</Button>
              
              <Divider label="Or continue with" spacing="sm" />
              
              <Box display="flex" gap="md">
                <Button variant="ghost" fullWidth>Google</Button>
                <Button variant="ghost" fullWidth>GitHub</Button>
              </Box>
              
              <Typography variant="bodySm" tone="muted" align="center">
                Don't have an account? <span style={{ color: '#0a9396', cursor: 'pointer' }}>Sign up</span>
              </Typography>
            </Box>
          </Card.Body>
        </Card>
      </Container>
    </Section>
  ),
};

// ----------------------------------------------------------------------------
// SEARCH BAR
// ----------------------------------------------------------------------------

export const SearchBar: Story = {
  render: () => (
    <Box display="flex" gap="sm" style={{ maxWidth: '500px' }}>
      <Input
        leftIcon={<SearchIcon />}
        placeholder="Search components..."
        fullWidth
      />
      <Button variant="primary">Search</Button>
    </Box>
  ),
};
