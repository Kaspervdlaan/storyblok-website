import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../../atoms/Button';
import { Typography } from '../../atoms/Typography';
import { Box } from '../../atoms/Box';
import { Input } from '../../atoms/Input';
import { Card } from '../Card';

const meta: Meta<typeof Modal> = {
  title: 'Molecules/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['centered', 'fullscreen'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    showCloseButton: {
      control: 'boolean',
    },
    preventCloseOnOverlayClick: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// ----------------------------------------------------------------------------
// DEFAULT
// ----------------------------------------------------------------------------

const DefaultTemplate = (args: any) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal {...args} open={open} onClose={() => setOpen(false)}>
        <Typography variant="body">
          This is a modal dialog. You can close it by clicking the X button, clicking outside, or pressing Escape.
        </Typography>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: DefaultTemplate,
  args: {
    title: 'Modal Title',
    variant: 'centered',
    size: 'md',
  },
};

// ----------------------------------------------------------------------------
// VARIANTS
// ----------------------------------------------------------------------------

export const Centered: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Centered Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Centered Modal"
          variant="centered"
          size="md"
        >
          <Typography variant="body">
            This is a centered modal. It appears in the center of the screen with a backdrop.
          </Typography>
        </Modal>
      </>
    );
  },
};

export const Fullscreen: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Fullscreen Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Fullscreen Modal"
          variant="fullscreen"
        >
          <Typography variant="body">
            This is a fullscreen modal. It takes up the entire viewport.
          </Typography>
        </Modal>
      </>
    );
  },
};

// ----------------------------------------------------------------------------
// SIZES
// ----------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => {
    const [openSm, setOpenSm] = useState(false);
    const [openMd, setOpenMd] = useState(false);
    const [openLg, setOpenLg] = useState(false);
    const [openXl, setOpenXl] = useState(false);

    return (
      <Box display="flex" gap="md" style={{ flexWrap: 'wrap' }}>
        <Button onClick={() => setOpenSm(true)}>Small</Button>
        <Button onClick={() => setOpenMd(true)}>Medium</Button>
        <Button onClick={() => setOpenLg(true)}>Large</Button>
        <Button onClick={() => setOpenXl(true)}>Extra Large</Button>

        <Modal
          open={openSm}
          onClose={() => setOpenSm(false)}
          title="Small Modal"
          size="sm"
        >
          <Typography variant="body">Small modal (400px max width)</Typography>
        </Modal>

        <Modal
          open={openMd}
          onClose={() => setOpenMd(false)}
          title="Medium Modal"
          size="md"
        >
          <Typography variant="body">Medium modal (600px max width)</Typography>
        </Modal>

        <Modal
          open={openLg}
          onClose={() => setOpenLg(false)}
          title="Large Modal"
          size="lg"
        >
          <Typography variant="body">Large modal (800px max width)</Typography>
        </Modal>

        <Modal
          open={openXl}
          onClose={() => setOpenXl(false)}
          title="Extra Large Modal"
          size="xl"
        >
          <Typography variant="body">Extra large modal (1200px max width)</Typography>
        </Modal>
      </Box>
    );
  },
};

// ----------------------------------------------------------------------------
// WITH FOOTER
// ----------------------------------------------------------------------------

export const WithFooter: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal with Footer</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Confirm Action"
          footer={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                Confirm
              </Button>
            </>
          }
        >
          <Typography variant="body">
            Are you sure you want to perform this action? This cannot be undone.
          </Typography>
        </Modal>
      </>
    );
  },
};

// ----------------------------------------------------------------------------
// FORM MODAL
// ----------------------------------------------------------------------------

export const FormModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Form Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Create Account"
          size="md"
          footer={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                Create Account
              </Button>
            </>
          }
        >
          <Box display="flex" direction="column" gap="md">
            <Input label="Full Name" placeholder="John Doe" />
            <Input label="Email" type="email" placeholder="john@example.com" />
            <Input label="Password" type="password" placeholder="Enter password" />
          </Box>
        </Modal>
      </>
    );
  },
};

// ----------------------------------------------------------------------------
// NO CLOSE BUTTON
// ----------------------------------------------------------------------------

export const NoCloseButton: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal (No Close Button)</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Important Notice"
          showCloseButton={false}
        >
          <Typography variant="body">
            This modal doesn't have a close button. You can only close it by clicking outside or pressing Escape.
          </Typography>
          <Box marginTop="md">
            <Button onClick={() => setOpen(false)}>Close</Button>
          </Box>
        </Modal>
      </>
    );
  },
};

// ----------------------------------------------------------------------------
// PREVENT OVERLAY CLOSE
// ----------------------------------------------------------------------------

export const PreventOverlayClose: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal (No Overlay Close)</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Must Use Button"
          preventCloseOnOverlayClick={true}
        >
          <Typography variant="body">
            This modal cannot be closed by clicking outside. You must use the close button or Escape key.
          </Typography>
        </Modal>
      </>
    );
  },
};

// ----------------------------------------------------------------------------
// SCROLLABLE CONTENT
// ----------------------------------------------------------------------------

export const ScrollableContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Scrollable Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Long Content"
          size="md"
        >
          <Box display="flex" direction="column" gap="md">
            {Array.from({ length: 20 }).map((_, i) => (
              <Typography key={i} variant="body">
                This is paragraph {i + 1}. The modal body will scroll when content exceeds the available space.
              </Typography>
            ))}
          </Box>
        </Modal>
      </>
    );
  },
};

// ----------------------------------------------------------------------------
// NEOBRUTALIST SHOWCASE
// ----------------------------------------------------------------------------

export const NeobrutalistShowcase: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Box
          display="flex"
          align="center"
          justify="center"
          style={{ minHeight: '100vh', padding: '2rem' }}
        >
          <Button size="lg" onClick={() => setOpen(true)}>
            OPEN BOLD MODAL
          </Button>
        </Box>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="NEOBRUTALIST MODAL"
          size="lg"
          footer={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                CANCEL
              </Button>
              <Button variant="primary" size="lg" onClick={() => setOpen(false)}>
                CONFIRM
              </Button>
            </>
          }
        >
          <Card variant="outlined" padding="md">
            <Typography variant="h3" style={{ marginBottom: '1rem' }}>
              Bold Design
            </Typography>
            <Typography variant="body">
              This modal showcases the neobrutalist aesthetic with heavy borders, offset shadows, and unapologetic presence.
            </Typography>
          </Card>
        </Modal>
      </>
    );
  },
};

